var p = new Proxy({}, {
  ownKeys: function () {
    return [{}];
  }
});