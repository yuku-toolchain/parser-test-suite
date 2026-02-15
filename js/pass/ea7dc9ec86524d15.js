var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: new SyntaxError()
  }
});
var preCheck = obj.hasOwnProperty("property");
delete obj.property;