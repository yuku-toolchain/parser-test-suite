var p1 = new Proxy({}, {
  preventExtensions: function () {
    return false;
  }
});
var p2 = new Proxy({}, {
  preventExtensions: function (target) {
    Object.preventExtensions(target);
    return true;
  }
});