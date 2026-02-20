var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: Math
  }
});
var preCheck = obj.hasOwnProperty("property");
delete obj.property;