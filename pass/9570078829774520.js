var p = new Proxy({}, {
  ownKeys: function () {
    return ["a", "a"];
  }
});