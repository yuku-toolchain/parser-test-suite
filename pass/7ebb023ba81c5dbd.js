var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: new RegExp()
  }
});
var preCheck = obj.hasOwnProperty("property");
delete obj.property;