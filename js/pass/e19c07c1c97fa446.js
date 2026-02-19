var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: new Number(-123)
  }
});
var preCheck = obj.hasOwnProperty("property");
delete obj.property;