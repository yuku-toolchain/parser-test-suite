var target = {
  foo: 1,
  bar: 2
};
var p = new Proxy(target, {});
var keys = Object.getOwnPropertyNames(p);