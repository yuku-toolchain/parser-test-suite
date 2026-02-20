var _handler, _target, _prop;
var target = {
  attr: 1
};
var handler = {
  deleteProperty: function (t, prop) {
    _handler = this;
    _target = t;
    _prop = prop;
    return delete t[prop];
  }
};
var p = new Proxy(target, handler);
delete p.attr;