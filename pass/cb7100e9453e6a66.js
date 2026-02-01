var obj = {};
Object.defineProperties(obj, {
  prop: {
    configurable: true
  }
});
var result1 = obj.hasOwnProperty("prop");
delete obj.prop;
var result2 = obj.hasOwnProperty("prop");