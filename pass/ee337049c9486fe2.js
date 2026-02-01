var obj = {};
var lengthAccessed = false;
var loopAccessed = false;
Object.defineProperty(obj, "length", {
  get: function () {
    lengthAccessed = true;
    return 20;
  },
  configurable: true
});
Object.defineProperty(obj, "0", {
  get: function () {
    loopAccessed = true;
    return 10;
  },
  configurable: true
});