var obj = {};
this.configurable = true;
Object.defineProperties(obj, {
  prop: this
});
var result1 = obj.hasOwnProperty("prop");
delete obj.prop;
var result2 = obj.hasOwnProperty("prop");