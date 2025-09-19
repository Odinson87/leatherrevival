import { Cache } from "./Cache.js";
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
            container.appendChild(this.renderPost(post))
        });
        return container;
    };
    Posts.prototype.renderPost = function (obj) {
        // console.log(obj);
        let article = document.createElement('article');
        let header = this.renderHeader(obj)
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
            avatar.src = obj.account.avatar
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
        container.classList.add('media-viewer')
        
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
            })
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
        let many = lgViewer.querySelector('.many');
        if (null !== many) {
            many.remove();
        }
        lgViewer.classList.add('large');
        lgViewer.classList.add('blackout');
        lgViewer.addEventListener('click', function (e) {
            e.preventDefault();
            let container = e.target;
            while (!container.classList.contains('blackout')) {
                container = container.parentNode
            }

            container.remove();
        });

        let body = document.getElementsByTagName("body")[0];
        body.append(lgViewer);
    };
    return Posts;
}());
export { Posts };