var objOne = {
  1: true
};
var objTwo = {
  2: true
};
Object.defineProperty(objOne, "length", {
  get: function () {
    return 2;
  },
  configurable: true
});
Object.defineProperty(objTwo, "length", {
  get: function () {
    return 2;
  },
  configurable: true
});