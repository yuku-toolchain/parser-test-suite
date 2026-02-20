var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: "false"
  }
});
var preCheck = obj.hasOwnProperty("property");
delete obj.property;