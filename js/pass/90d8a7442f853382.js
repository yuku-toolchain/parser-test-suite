var descObj = function () {};
descObj.configurable = true;
var newObj = Object.create({}, {
  prop: descObj
});
var result1 = newObj.hasOwnProperty("prop");
delete newObj.prop;
var result2 = newObj.hasOwnProperty("prop");