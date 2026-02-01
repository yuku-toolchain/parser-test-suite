var obj = [];
obj.verifySetFunction = "data";
var getFunc = function () {
  return obj.verifySetFunction;
};
var setFunc = function (value) {
  obj.verifySetFunction = value;
};
Object.defineProperty(obj, "prop", {
  get: getFunc,
  set: setFunc,
  configurable: false
});
var result = false;
try {
  Object.defineProperty(obj, "prop", {
    get: function () {
      return 100;
    }
  });
} catch (e) {
  result = e instanceof TypeError;
}
try {
  Object.defineProperty(obj, "prop", {
    set: function (value) {
      obj.verifySetFunction1 = value;
    }
  });
} catch (e1) {
  if (!result) {}
  if (!(e1 instanceof TypeError)) {}
}