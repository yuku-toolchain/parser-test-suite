var target = {
  foo: 1
};
var p = new Proxy(target, {
  ownKeys: function () {
    return ["foo", "bar"];
  }
});
Object.preventExtensions(target);