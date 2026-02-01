var p = new Proxy({}, {
  preventExtensions: function (t) {
    return true;
  }
});