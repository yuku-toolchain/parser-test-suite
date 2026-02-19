var arrayObj = [1, 2, 3];
arrayObj.get = function () {
  return "VerifyArrayObject";
};
var newObj = Object.create({}, {
  prop: arrayObj
});