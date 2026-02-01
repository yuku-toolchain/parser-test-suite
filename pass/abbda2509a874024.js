var target = {};
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function (t, prop) {
    var foo = {
      bar: 1
    };
    return Object.getOwnPropertyDescriptor(foo, "bar");
  }
});
Object.preventExtensions(target);