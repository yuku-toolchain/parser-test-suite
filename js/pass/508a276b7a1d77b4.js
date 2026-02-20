var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: new Date(0)
  }
});
var preCheck = obj.hasOwnProperty("property");
delete obj.property;