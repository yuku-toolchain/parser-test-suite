var p = new Proxy({}, {
  deleteProperty: function () {
    return 1;
  }
});