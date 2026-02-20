var data = "data";
var getFunc = function () {
  return data;
};
var setFunc = function (value) {
  data = value;
};
Object.defineProperty(Object.prototype, "0", {
  get: getFunc,
  set: setFunc,
  configurable: true
});
var argObj = (function () {
  return arguments;
})(1);