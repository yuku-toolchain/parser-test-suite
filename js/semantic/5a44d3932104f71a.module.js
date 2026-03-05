var _handler, _target, _prop;
var target = {};
var handler = {
  has: function (t, prop) {
    _handler = this;
    _target = t;
    _prop = prop;
    return true;
  }
};
var p = new Proxy(target, handler);
with (p) {
  attr;
}