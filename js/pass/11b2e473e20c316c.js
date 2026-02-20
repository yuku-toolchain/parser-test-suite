var _target, _handler, _prop, _receiver;
var target = {
  attr: 1
};
var handler = {
  get: function (t, prop, receiver) {
    _handler = this;
    _target = t;
    _prop = prop;
    _receiver = receiver;
  }
};
var p = new Proxy(target, handler);
p.attr;
_prop = null;
p["attr"];