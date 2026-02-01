var funObj = function () {};
funObj.get = function () {
  return "VerifyFunctionObject";
};
var newObj = Object.create({}, {
  prop: funObj
});