var p = new Proxy({}, {
  isExtensible: function (t) {
    return false;
  }
});