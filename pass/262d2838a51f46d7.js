var argObj = (function () {
  return arguments;
})();
argObj.prop = {
  value: 12,
  enumerable: true
};
var newObj = Object.create({}, argObj);