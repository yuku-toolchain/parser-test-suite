var regObj = new RegExp();
regObj.get = function () {
  return "VerifyRegExpObject";
};
var newObj = Object.create({}, {
  prop: regObj
});