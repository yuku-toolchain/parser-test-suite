var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: 123
  }
});
var hadOwnProperty = obj.hasOwnProperty("property");
delete obj.property;