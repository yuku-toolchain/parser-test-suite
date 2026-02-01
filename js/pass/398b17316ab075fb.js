var _target, _handler;
var target = {};
var handler = {
  preventExtensions: function (t) {
    _handler = this;
    _target = t;
    return Object.preventExtensions(target);
  }
};
var p = new Proxy(target, handler);
Object.preventExtensions(p);