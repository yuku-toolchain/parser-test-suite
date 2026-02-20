var called = 0;
var target = new Proxy({}, {
  isExtensible: function () {
    called += 1;
  }
});
var p = new Proxy(target, {
  setPrototypeOf: function (t, v) {
    return v.attr;
  }
});
var result;
result = Reflect.setPrototypeOf(p, {
  attr: false
});
result = Reflect.setPrototypeOf(p, {
  attr: ""
});
result = Reflect.setPrototypeOf(p, {
  attr: 0
});
result = Reflect.setPrototypeOf(p, {
  attr: -0
});
result = Reflect.setPrototypeOf(p, {
  attr: null
});
result = Reflect.setPrototypeOf(p, {
  attr: undefined
});
result = Reflect.setPrototypeOf(p, {
  attr: NaN
});