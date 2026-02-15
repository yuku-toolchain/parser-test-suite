var obj = {};
obj.verifySetFunction = "data";
var getFunc = function () {
  return obj.verifySetFunction;
};
var setFunc = function (value) {
  obj.verifySetFunction = value;
};
Object.defineProperty(obj, "property", {
  get: getFunc,
  set: setFunc,
  configurable: false
});
var result = false;
try {
  Object.defineProperty(obj, "property", {
    get: function () {
      return 100;
    }
  });
} catch (e) {
  result = e instanceof TypeError;
}
try {
  Object.defineProperty(obj, "property", {
    set: function (value) {
      obj.verifySetFunction1 = value;
    }
  });
} catch (e) {
  if (!result) {}
  if (!(e instanceof TypeError)) {}
}