var obj = {};
Object.defineProperties(obj, {
  property: {
    configurable: function () {}
  }
});
var hadOwnProperty = obj.hasOwnProperty("property");
delete obj.property;