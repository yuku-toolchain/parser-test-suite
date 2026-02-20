var data = "data";
var getFunc = function () {
  return 12;
};
var setFunc = function (value) {
  data = value;
};
Object.defineProperty(Object.prototype, "length", {
  get: getFunc,
  set: setFunc,
  configurable: true
});
var argObj = (function () {
  return arguments;
})();