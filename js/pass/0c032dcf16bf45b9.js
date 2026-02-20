function callbackfn(val, idx, obj) {
  if (idx === 1) {
    return val === 12;
  }
  return false;
}
var obj = {
  length: 2
};
var helpVerifyVar = 11;
Object.defineProperty(obj, "1", {
  get: function () {
    return helpVerifyVar;
  },
  set: function (args) {
    helpVerifyVar = args;
  },
  configurable: true
});
Object.defineProperty(obj, "0", {
  get: function () {
    obj[1] = 12;
    return 11;
  },
  configurable: true
});