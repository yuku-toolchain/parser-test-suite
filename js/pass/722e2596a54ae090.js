var obj = {};
var descObj = new Number(-9);
descObj.configurable = true;
Object.defineProperties(obj, {
  prop: descObj
});
var result1 = obj.hasOwnProperty("prop");
delete obj.prop;
var result2 = obj.hasOwnProperty("prop");