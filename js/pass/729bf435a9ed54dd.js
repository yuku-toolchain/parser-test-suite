var _target, _handler;
var target = {};
var a = Symbol('a');
var b = Symbol('b');
target[a] = 1;
target[b] = 2;
var handler = {
  ownKeys: function (t) {
    _handler = this;
    _target = t;
    return Object.getOwnPropertySymbols(t);
  }
};
var p = new Proxy(target, handler);
var symbols = Object.getOwnPropertySymbols(p);