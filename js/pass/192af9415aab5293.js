var _handler, _target, _prop;
var proto = [14];
var target = Object.create(proto);
var handler = allowProxyTraps({
  has: function (target, prop) {
    _handler = this;
    _target = target;
    _prop = prop;
    return false;
  }
});
var proxy = new Proxy(target, handler);
var array = [];
Object.setPrototypeOf(array, proxy);