var p = new Proxy({}, {
  deleteProperty: function () {
    return true;
  }
});