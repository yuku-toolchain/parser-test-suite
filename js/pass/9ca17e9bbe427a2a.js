var called;
var target = new Proxy({}, {
  isExtensible: function () {
    called += 1;
    return true;
  },
  getPrototypeOf: function () {}
});
var p = new Proxy(target, {
  setPrototypeOf: function (t, v) {
    return v.attr;
  }
});
var result;
called = 0;
result = Reflect.setPrototypeOf(p, {
  attr: true
});
called = 0;
result = Reflect.setPrototypeOf(p, {
  attr: "false"
});
called = 0;
result = Reflect.setPrototypeOf(p, {
  attr: 42
});
called = 0;
result = Reflect.setPrototypeOf(p, {
  attr: p
});
called = 0;
result = Reflect.setPrototypeOf(p, {
  attr: []
});
called = 0;
result = Reflect.setPrototypeOf(p, {
  attr: Symbol(1)
});