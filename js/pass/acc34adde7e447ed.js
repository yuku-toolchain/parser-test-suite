var target = {
  foo: 1,
  bar: 2
};
var p = new Proxy(target, {
  ownKeys: function () {
    return ["foo", "bar"];
  }
});
Object.preventExtensions(target);
var keys = Object.getOwnPropertyNames(p);