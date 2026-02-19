var target = {
  prop: 2
};
var proxy = new Proxy(target, {
  ownKeys: function () {
    return [];
  }
});
Object.preventExtensions(target);