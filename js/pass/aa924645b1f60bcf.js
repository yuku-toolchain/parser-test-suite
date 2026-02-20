var obj = {};
var verifyExecute = false;
var getFunc = function () {
  verifyExecute = true;
};
Object.defineProperty(obj, "prop", {
  get: getFunc
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");