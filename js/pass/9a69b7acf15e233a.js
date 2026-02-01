var obj = {};
var data = "data";
Object.defineProperty(obj, "property", {
  set: function (value) {
    data = value;
  }
});
obj.property = "overrideData";