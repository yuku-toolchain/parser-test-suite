var obj = {};
Object.defineProperty(obj, "a", {
  get: function () {
    return "a";
  },
  configurable: true
});
var result = Object.getOwnPropertyNames(obj);