var obj = {};
var firstArg = 12;
var secondArg = 12;
var setFunc = function (a, b) {
  firstArg = a;
  secondArg = b;
};
Object.defineProperty(obj, "prop", {
  set: setFunc
});
obj.prop = 100;
var desc = Object.getOwnPropertyDescriptor(obj, "prop");