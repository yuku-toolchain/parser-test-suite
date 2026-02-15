var target = {};
var p = new Proxy({}, {
  preventExtensions: function (t) {
    return 0;
  }
});
Object.preventExtensions(target);