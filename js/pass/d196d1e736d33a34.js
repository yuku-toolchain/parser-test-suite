var target = {};
var proxy = new Proxy(target, {
  ownKeys: function () {
    return ['prop'];
  }
});
Object.preventExtensions(target);