var p = new Proxy({}, {
  getPrototypeOf: function () {
    return 0;
  }
});