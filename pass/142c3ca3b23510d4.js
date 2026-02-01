var target = {};
var symbol = Symbol();
var proxy = new Proxy(target, {
  ownKeys: function () {
    return [symbol];
  }
});
Object.preventExtensions(target);