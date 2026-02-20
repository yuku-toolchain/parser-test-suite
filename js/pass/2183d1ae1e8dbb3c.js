var p = new Proxy({}, {
  getPrototypeOf: function () {
    return false;
  }
});