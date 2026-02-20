var _target, _handler, _prop, _value, _receiver;
var target = {};
var handler = {
  set: function (t, prop, value, receiver) {
    _handler = this;
    _target = t;
    _prop = prop;
    _value = value;
    _receiver = receiver;
    return true;
  }
};
var p = new Proxy(target, handler);
p.attr = "foo";