var s = Symbol();
var p = new Proxy({}, {
  ownKeys: function () {
    return [s, s];
  }
});