var obj = {};
var data = "data";
this.set = function (value) {
  data = value;
};
Object.defineProperty(obj, "property", this);
obj.property = "overrideData";