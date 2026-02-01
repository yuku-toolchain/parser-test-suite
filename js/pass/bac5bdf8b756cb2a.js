var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: this
  }
});
var preCheck = obj.hasOwnProperty("property");
delete obj.property;