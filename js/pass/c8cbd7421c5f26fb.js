var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: true
  }
});
var hadOwnProperty = obj.hasOwnProperty("property");
delete obj.property;