var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: new Boolean(true)
  }
});
var preCheck = obj.hasOwnProperty("property");
delete obj.property;