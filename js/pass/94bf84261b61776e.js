var obj = (function () {
  return arguments;
})();
obj.verifySetFunction = "data";
var getFunc = function () {
  return obj.verifySetFunction;
};
var setFunc = function (value) {
  obj.verifySetFunction = value;
};
Object.defineProperty(obj, "0", {
  get: getFunc,
  set: setFunc,
  configurable: false
});
var result = false;
try {
  Object.defineProperty(obj, "0", {
    get: function () {
      return 100;
    }
  });
} catch (e) {
  result = e instanceof TypeError;
}
try {
  Object.defineProperty(obj, "0", {
    set: function (value) {
      obj.verifySetFunction1 = value;
    }
  });
} catch (e) {
  if (!result) {}
  if (!(e instanceof TypeError)) {}
}