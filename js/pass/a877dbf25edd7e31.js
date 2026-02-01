var target = {};
var p = new Proxy(target, {
  defineProperty: function (t, prop, desc) {
    return true;
  }
});
Object.preventExtensions(target);