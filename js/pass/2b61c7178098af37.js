var target = {};
var p = new Proxy(target, {
  isExtensible: function (t) {
    return Object.isExtensible(t);
  }
});
Object.preventExtensions(target);