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
export { Contact };
