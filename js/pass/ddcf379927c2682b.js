var obj = {};
var descObj = new Number(-9);
descObj.value = "Number";
Object.defineProperties(obj, {
  property: descObj
});