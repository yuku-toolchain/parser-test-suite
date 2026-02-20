var proxy, called, value;
var target = new Proxy({}, {
  setPrototypeOf: function (t, v) {
    called += 1;
    value = v;
    return true;
  }
});
var proto = {};
proxy = new Proxy(target, {});
called = 0;
value = false;
Object.setPrototypeOf(proxy, proto);
proxy = new Proxy(target, {
  setPrototypeOf: null
});
called = 0;
value = false;
Object.setPrototypeOf(proxy, proto);