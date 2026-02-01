var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: "abc"
  }
});
var hadOwnProperty = obj.hasOwnProperty("property");
delete obj.property;