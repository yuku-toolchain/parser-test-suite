var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: JSON
  }
});
var preCheck = obj.hasOwnProperty("property");
delete obj.property;