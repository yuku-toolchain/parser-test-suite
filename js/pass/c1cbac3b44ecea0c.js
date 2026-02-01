var obj = {};
var data = "data";
Date.prototype.set = function (value) {
  data = value;
};
var dateObj = new Date();
Object.defineProperty(obj, "property", dateObj);
obj.property = "overrideData";