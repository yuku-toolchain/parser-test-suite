var dateObj = new Date(0);
dateObj.get = function () {
  return "VerifyDateObject";
};
var newObj = Object.create({}, {
  prop: dateObj
});