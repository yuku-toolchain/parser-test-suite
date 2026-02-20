var _handler, _target, _prop, _value, _receiver;
var target = {};
var handler = allowProxyTraps({
  set: function (target, prop, value, receiver) {
    _handler = this;
    _target = target;
    _prop = prop;
    _value = value;
    _receiver = receiver;
    return true;
  }
});
var proxy = new Proxy(target, handler);
var receiver = Object.create(proxy);
receiver.prop = 'value';