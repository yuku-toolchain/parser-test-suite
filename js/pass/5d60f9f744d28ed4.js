var target = {
  foo: 1
};
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function (t, prop) {
    return;
  }
});
Object.preventExtensions(target);