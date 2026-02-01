var _handler, _target, _prop, _desc;
var target = {};
var descriptor = {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 1
};
var handler = {
  defineProperty: function (t, prop, desc) {
    _handler = this;
    _target = t;
    _prop = prop;
    _desc = desc;
    return true;
  }
};
var p = new Proxy(target, handler);
Object.defineProperty(p, "attr", descriptor);