import { Contact } from './Contact.js';
import { Posts } from './Posts.js';
var App = (function () {
    function App() {
        this.d = {
            "contacts": {}
        };
        this.dom = {};
        this.mastadon_id = '114595920733050573';
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
    App.prototype.blackout = function (el) {
        var blackout = document.createElement("div");
        blackout.classList.add("blackout");
        var close = document.createElement("a");
        close.classList.add("btn");
        close.classList.add("bg-red");
        close.appendChild(document.createTextNode("close"));
        close.addEventListener("click", function () {
            this.parentElement.remove();
        });
        blackout.appendChild(close);
        blackout.appendChild(el);
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
        console.log(postsEl);
        this.blackout(postsEl);
    };
    return App;
}());
export { App };
