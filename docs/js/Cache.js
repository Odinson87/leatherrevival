var Cache = (function () {
    function Cache(name = null, intervalMs = null, data = null) {
        
        // when all null return self for use as a service
        if (!name || !intervalMs || !data) {
            return;
        }

        let stores = this.getStores('stores');

        let item = this.load(name) ?? {};
        //console.log('cache item:', item, Object.keys(item).length);

        //instantiate first time
        if (!Object.hasOwn(stores, name)){
            stores[name] = {};
        }
        
        // set last time as null when never set and cached item is empty (due to never set or expired)
        if (!Object.hasOwn(stores[name], 'lasTimeMs') && Object.keys(item).length == 0) {
            // set as null so data will be pulled
            stores[name]['lastTimeMs'] = null;
        }

        // add/update interval
        stores[name]['interval'] = this.calcMs(intervalMs);
        
        // only save if `data` has properties 
        // so we don't just trash existing data with empty onload
        if (Object.keys(data).length > 0) {
            this.save(name, data);
        }
        
        this.saveStores(stores);
    }
    Cache.prototype.calcMs = function (value) {
        
        // check for t(ime) suffixes h(ours) and m(inutes)
        const timeStrRegex = /(\d*?)([hm])$/;
        let result = value;
        let isnum = /^\d+$/.test(value);

        // multiply to get milliseconds
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
            if (Object.hasOwn(stores, name)) {
                stores[name]['lastTimeMs'] = Date.now();
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