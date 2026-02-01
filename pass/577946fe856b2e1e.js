var obj = {};
JSON.configurable = true;
Object.defineProperties(obj, {
  prop: JSON
});
var result1 = obj.hasOwnProperty("prop");
delete obj.prop;
var result2 = obj.hasOwnProperty("prop");