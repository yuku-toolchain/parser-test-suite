var p = new Proxy({}, {
  has: function (t, prop) {
    return true;
  }
});