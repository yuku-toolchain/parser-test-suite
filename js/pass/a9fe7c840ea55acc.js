var numObj = new Number(5);
numObj.get = function () {
  return "VerifyNumberObject";
};
var newObj = Object.create({}, {
  prop: numObj
});