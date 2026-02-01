var _target, _handler;
var target = {
  foo: 1,
  bar: 2
};
var handler = {
  ownKeys: function (t) {
    _handler = this;
    _target = t;
    return Object.getOwnPropertyNames(t);
  }
};
var p = new Proxy(target, handler);
var names = Object.getOwnPropertyNames(p);