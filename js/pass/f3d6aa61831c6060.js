var target = {
  foo: 1,
  bar: 2
};
var p = new Proxy(target, {
  ownKeys: function () {
    return ["foo"];
  }
});
Object.preventExtensions(target);