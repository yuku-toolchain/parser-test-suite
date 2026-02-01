var target = {};
var p = new Proxy(target, {
  ownKeys: function () {
    return undefined;
  }
});