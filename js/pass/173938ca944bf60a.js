var obj = {};
var verifySetFunc = 20;
var setFunc = function (value) {
  verifySetFunc = value;
};
Object.defineProperty(obj, "prop", {
  set: setFunc
});
obj.prop = 2010;
var desc = Object.getOwnPropertyDescriptor(obj, "prop");