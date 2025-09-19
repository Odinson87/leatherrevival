var Cache = (function () {
    function Cache(name = null, intervalMs = null, data = null) {
        
        // when all null get use as service
        if (!name || !intervalMs || !data) {
            return;
        }

        let created = Date.now();
        let stores = this.getStores('stores');
        stores[name] = {
            lastTimeMs: created,
            interval: this.calcMs(intervalMs)
        };
        
        // only save if `data` has properties 
        // so we don't just trash existing data with empty onload
        if (Object.keys(data).length > 0) {
            this.save(name, data);
        } else {
            // when instantiated with empty data object
            // use null to indicate never been cached, fetch required 
            stores[name].lastTimeMs = null;
        }
        
        this.saveStores(stores);
    }
    Cache.prototype.calcMs = function (value) {
        
        const timeStrRegex = /(\d*?)([hm])$/;
        let result = value;
        let isnum = /^\d+$/.test(value);
        console.log('calcMs', isnum);
        if (!isnum && timeStrRegex.test(value)) {
            let i = value.match(timeStrRegex);
            let t = i[2];
            switch (t) {
                case 'm':
                    result = parseInt(i[1]) * 60 * 1000;
                    break;
                case 'h':
                    result = parseInt(i[1]) * 60 * 60 * 1000;
                    break;
                default:
                    result = value;
            }
        }

        return result;
    };

    Cache.prototype.saveStores = function (stores) {
        localStorage.setItem('stores', JSON.stringify(stores)); 
    };

    Cache.prototype.getStores = function () {
        return JSON.parse(localStorage.getItem('stores') ?? '{}'); 
    };

    // When a cache has expired null is returned instead of an empty object
    // so we know when we need to fetch fresh data
    Cache.prototype.load = function (name) {
        if (localStorage) {
            // get store data
            let stores = this.getStores();
            if (Object.hasOwn(stores, name)) {
                if (stores[name].interval) {
                    let d = Date.now();
                    let expiredMs = stores[name].lastTimeMs + stores[name].interval ;
                    if ( null == stores[name].lastTimeMs || d > expiredMs ) {
                        // cache has expired refresh/fetch
                        return null;
                    }
                }
            }
            // return cached data from storage
            return JSON.parse(localStorage.getItem(name) ?? '{}');
        }
        console.error('Cache: No local storage');
        return null;
    };

    Cache.prototype.save = function (name, data) {
        if (localStorage) {
            // save data
            localStorage.setItem(name, JSON.stringify(data));
            
            // update store metadata
            let stores = this.getStores();
            let d = Date.now();
            if (Object.hasOwn(stores, name)) {
                stores[name]['lastTimeMs'] = d;
            }
            this.saveStores(stores);
            return true;
        }
        console.error('Cache: No local storage');
        return false;
    };

    return Cache;
}());

export { Cache };