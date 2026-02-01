var obj = {};
Math.configurable = true;
Object.defineProperties(obj, {
  prop: Math
});
var result1 = obj.hasOwnProperty("prop");
delete obj.prop;
var result2 = obj.hasOwnProperty("prop");