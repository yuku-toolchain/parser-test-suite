var p = new Proxy({}, {
  ownKeys: function () {
    return [1];
  }
});