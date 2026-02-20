var errObj = new Error("error");
errObj.get = function () {
  return "VerifyErrorObject";
};
var newObj = Object.create({}, {
  prop: errObj
});