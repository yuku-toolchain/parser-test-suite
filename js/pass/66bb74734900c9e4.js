var target = {};
var p = new Proxy(target, {
  preventExtensions: function (t) {
    return 1;
  }
});
Object.preventExtensions(target);