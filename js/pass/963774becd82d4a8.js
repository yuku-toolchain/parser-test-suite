var target = {};
var symbol = Symbol();
target[symbol] = 2;
var proxy = new Proxy(target, {
  ownKeys: function () {
    return [];
  }
});
Object.preventExtensions(target);