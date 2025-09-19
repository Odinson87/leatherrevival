(function () {
    'use strict';

    String.prototype.initCaps = function () {
        return this.split(" ").map(function (w) { return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase(); }).join(" ");
    };
    String.prototype.lower = function () {
        return this.toLowerCase();
    };
    String.prototype.upper = function () {
        return this.toUpperCase();
    };

    var Cache = (function () {
        function Cache(name = null, intervalMs = null, data = null) {
            
            // when all null get use as service
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
            
            const timeStrRegex = /(\d*?)([hm])$/;
            let result = value;
            let isnum = /^\d+$/.test(value);

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

    var Contact = (function () {
        function Contact(el) {
            this.contacts_path = 'data/contacts/';
            this.el = el;
            var name = el.getAttribute('data-contact');
            this.load(name);
        }
        Contact.prototype.load = function (name) {
            var _this = this;
            name = this.contacts_path + name + '.json';
            fetch(name)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            }).then(function (data) {
                _this.raw = data;
            });
        };
        Contact.prototype.render = function () {
            var _this = this;
            var contact = document.createElement("div");
            contact.classList.add("modal");
            var fields = [];
            Object.keys(this.raw).forEach(function (prop) {
                if (prop !== "address") {
                    if (prop === "name") {
                        fields.push(_this.renderString(prop));
                    }
                    if (prop === "mobile" || prop === "phone") {
                        fields.push(_this.renderPhone(prop));
                    }
                    if (prop === "email") {
                        fields.push(_this.renderEmail(prop));
                    }
                }
            });
            fields.forEach(function (element) {
                var field = document.createElement("div");
                field.appendChild(element);
                contact.appendChild(field);
            });
            return contact;
        };
        Contact.prototype.renderString = function (prop) {
            var p = document.createElement("p");
            var text = document.createTextNode(prop.initCaps() + " : " + this.raw[prop].initCaps());
            p.appendChild(text);
            return p;
        };
        Contact.prototype.renderLink = function (href, str) {
            var a = document.createElement("a");
            a.setAttribute("href", href);
            a.appendChild(document.createTextNode(str));
            return a;
        };
        Contact.prototype.renderPhone = function (prop) {
            var number = this.raw[prop].replace(/#/g, "");
            return this.renderLink("tel:" + number.replace("0", "+44"), prop.initCaps() + " : " + number);
        };
        Contact.prototype.renderEmail = function (prop) {
            var email = this.raw[prop].lower();
            if (!/@/.test(email)) {
                var host = this.raw.domain ? this.raw.domain : window.location.host.replace(/(http[s]*\:\/\/)*(w{3}\.)*/gi, "");
                email = email + "@" + host;
            }
            return this.renderLink("mailto:" + email, prop.initCaps() + " : " + email);
        };
        return Contact;
    }());

    var Posts = (function () {
        function Posts (id, options = {}) {
            this.user_id = id;
            this.options = options;
        }
        Posts.prototype.getUserPosts = async function () {
            let cachedPosts = new Cache().load('posts');
            
            // load from cache if not expired
            if (cachedPosts) {
                return cachedPosts;
            }

            let url = 'https://mastodon.social/api/v1/accounts/' + this.user_id + '/statuses';

            let posts = await fetch(url).then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            });

            new Cache().save('posts', posts);
            return posts;
        };
        Posts.prototype.render = async function() {
            let posts = await this.getUserPosts();
            let container = document.createElement('div');
            container.classList.add('posts');
            posts.forEach(post => {
                container.appendChild(this.renderPost(post));
            });
            return container;
        };
        Posts.prototype.renderPost = function (obj) {
            // console.log(obj);
            let article = document.createElement('article');
            let header = this.renderHeader(obj);
            let body = document.createElement('section');
            body.classList.add('body');
            body.innerHTML = obj.content;
            body.append(this.renderMedia(obj));
            let footer = document.createElement('footer');
            article.appendChild(header);
            article.appendChild(body);
            article.appendChild(footer);
            return article;
        };
        Posts.prototype.renderHeader = function (obj) {
            let header = document.createElement('header');
            if (Object.hasOwn(obj, 'account')) {
                let avatar = document.createElement('img');
                avatar.src = obj.account.avatar;
                avatar.classList.add('avatar');

                let name = document.createTextNode(
                    obj.account.display_name + ' @' + obj.account.acct
                );
                let link = document.createElement('a');
                link.setAttribute('href', obj.account.uri);
                link.appendChild(name);
                
                header.appendChild(avatar);
                header.appendChild(link);
            }
            return header;
        };
        Posts.prototype.renderMedia = function(obj) {
            let _this = this;
            let container = document.createElement('div');
            container.classList.add('media-viewer');
            
            let media = [];
            if (Array.isArray(obj.media_attachments)) {
                obj.media_attachments.forEach( attachment => {
                    if (attachment.type == 'image') {
                        let img = document.createElement('img');
                        img.src = attachment.url;
                        img.addEventListener('click', function(e) {
                            //console.log(e.target);
                            _this.toggleLargeViewer(container);
                        });
                        media.push(img);
                    }
                });
            }
            if (media.length > 1) {
                let many = document.createElement('span');
                many.classList.add('many');
                many.append(document.createTextNode('[]]'));
                container.append(many);

            }
            container.append(...media);
            return container;
        };
        Posts.prototype.toggleLargeViewer = function (viewerEl) {
            let lgViewer = viewerEl.cloneNode(true);
            lgViewer.querySelector('.many').remove();
            lgViewer.classList.add('large');
            lgViewer.classList.add('blackout');
            lgViewer.addEventListener('click', function (e) {
                e.preventDefault();
                let container = e.target;
                while (!container.classList.contains('blackout')) {
                    container = container.parentNode;
                }

                container.remove();
            });

            let body = document.getElementsByTagName("body")[0];
            body.append(lgViewer);
        };
        return Posts;
    }());

    var App = (function () {
        function App() {
            this.d = {
                "contacts": {}
            };
            this.dom = {};
            this.mastadon_id = '114595920733050573';
            this.cachedPosts = new Cache('posts', '5h', {});
            this.cacheDom();
            this.bind();
        }
        App.prototype.cacheDom = function () {
            this.dom["body"] = document.getElementsByTagName("body")[0];
            this.dom["nav"] = [];
            var nav = document.getElementsByTagName("nav");
            for (var i = 0; i < nav.length; i++) {
                for (var n = 0; n < nav[i].children.length; n++) {
                    this.dom["nav"].push(nav[i].children[n]);
                }
            }
        };
        App.prototype.bind = function () {
            var _this = this;
            this.dom.nav.forEach(function (element) {
                if (element.textContent.lower() === "gallery") {
                    element.addEventListener("click", function () {
                        //_this.blackout(_this.notification("Gallery Coming Soon..."));
                        _this.posts();
                    });
                }
            });
            var contactButtons = document.querySelectorAll('[data-contact]');
            contactButtons.forEach(function (element) {
                var name = element.getAttribute('data-contact');
                if (!_this.d.contacts[name]) {
                    _this.d.contacts[name] = new Contact(element);
                }
                element.addEventListener('click', function () {
                    _this.showContact(element);
                });
            });
        };
        App.prototype.showContact = function (el) {
            var name = el.getAttribute('data-contact');
            if (this.d.contacts[name]) {
                this.blackout(this.d.contacts[name].render());
            }
        };
        App.prototype.blackout = function (el, scroll = false) {
            var blackout = document.createElement("div");
            blackout.classList.add("blackout");
            if (scroll) {
                blackout.classList.add("scroll");
            }
            var close = document.createElement("a");
            close.classList.add("btn");
            close.classList.add("bg-red");
            close.appendChild(document.createTextNode("close"));
            close.addEventListener("click", function () {
                this.parentElement.remove();
            });
            blackout.appendChild(close);
            blackout.appendChild(el);
            this.dom['blackout'] = blackout;
            this.dom.body.appendChild(blackout);
        };
        App.prototype.notification = function (str) {
            var modal = document.createElement("div");
            modal.classList.add("modal");
            var note = document.createElement("div");
            note.appendChild(document.createTextNode(str));
            modal.appendChild(note);
            return modal;
        };
        App.prototype.posts = async function() {
            let posts = new Posts(this.mastadon_id);
            let postsEl = await posts.render();
            this.blackout(postsEl, true);
            //this.dom.blackout.style.display = 'none';
        };
        return App;
    }());

    new App;

})();
