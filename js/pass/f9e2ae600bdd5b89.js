var obj = {};
var getFunc = function () {
  return 12;
};
Object.defineProperties(obj, {
  foo: {
    get: getFunc,
    enumerable: true,
    configurable: true
  }
});
Object.defineProperties(obj, {
  foo: {}
});