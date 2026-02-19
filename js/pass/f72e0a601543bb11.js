var _handler, _target, _prop;
var target = {};
var handler = {
  has: function (t, prop) {
    _handler = this;
    _target = t;
    _prop = prop;
    return false;
  }
};
var p = new Proxy(target, handler);
("attr" in Object.create(p));