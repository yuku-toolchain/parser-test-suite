var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: new String("abc")
  }
});
var hadOwnProperty = obj.hasOwnProperty("property");
delete obj.property;