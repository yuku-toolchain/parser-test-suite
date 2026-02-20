var boolObj = new Boolean(true);
boolObj.get = function () {
  return "VerifyBooleanObject";
};
var newObj = Object.create({}, {
  prop: boolObj
});