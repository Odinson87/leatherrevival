String.prototype.initCaps = function () {
    return this.split(" ").map(function (w) { return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase(); }).join(" ");
};

String.prototype.lower = function () {
    return this.toLowerCase();
};

String.prototype.upper = function () {
    return this.toUpperCase();
};

String.prototype.fromISODate = function () {
    let isoRegex = /\d+-\d+-\d+T\d+:\d+:\d+/;
    return new Date(this.match(isoRegex)[0]).toDateString();
};