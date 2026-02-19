var obj = {};
var setFunc = function (value) {
  this.len = value;
};
Object.defineProperty(obj, "prop", {
  set: setFunc
});
obj.prop = 2010;
var desc = Object.getOwnPropertyDescriptor(obj, "prop");