var _handler, _target;
var target = {};
var handler = {
  getPrototypeOf: function (t) {
    _handler = this;
    _target = t;
    return {};
  }
};
var p = new Proxy(target, handler);
Object.getPrototypeOf(p);