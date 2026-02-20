Math.configurable = true;
var newObj = Object.create({}, {
  prop: Math
});
var result1 = newObj.hasOwnProperty("prop");
delete newObj.prop;
var result2 = newObj.hasOwnProperty("prop");