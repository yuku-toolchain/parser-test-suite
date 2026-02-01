var p = new Proxy({
  attr: 42
}, {
  ownKeys: function () {
    return ["foo", "bar"];
  }
});
var keys = Object.getOwnPropertyNames(p);