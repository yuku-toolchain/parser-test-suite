var getterCalled = false;
Object.defineProperty(Function.prototype, "prototype", {
  get: function () {
    getterCalled = true;
    return Array.prototype;
  }
});
var result = [] instanceof Function.prototype;