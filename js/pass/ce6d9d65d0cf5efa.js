var strObj = new String("abc");
strObj.get = function () {
  return "VerifyStringObject";
};
var newObj = Object.create({}, {
  prop: strObj
});