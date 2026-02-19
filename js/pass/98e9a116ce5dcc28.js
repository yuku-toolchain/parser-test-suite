var target = {};
var p = new Proxy(target, {
  isExtensible: function (t) {
    if (Object.isExtensible(t)) {
      return 1;
    } else {
      return 0;
    }
  }
});
Object.preventExtensions(target);