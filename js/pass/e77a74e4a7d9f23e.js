var _target, _handler;
var target = {};
var handler = {
  isExtensible: function (t) {
    _handler = this;
    _target = t;
    return Object.isExtensible(t);
  }
};
var p = new Proxy(target, handler);
Object.isExtensible(p);