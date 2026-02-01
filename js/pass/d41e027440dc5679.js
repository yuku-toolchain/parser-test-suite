var target = {};
var handler = {
  set: function (t, prop, value, receiver) {
    return true;
  }
};
var p = new Proxy(target, handler);
Object.defineProperty(target, "attr", {
  configurable: true,
  set: undefined
});