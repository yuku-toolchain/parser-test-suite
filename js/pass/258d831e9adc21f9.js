var argObj = (function () {
  return arguments;
})();
argObj.get = function () {
  return "VerifyArgumentsObject";
};
var newObj = Object.create({}, {
  prop: argObj
});