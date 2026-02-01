var data = "data";
var setFun = function (value) {
  data = value;
};
Math.prop = {
  set: setFun
};
var obj = {};
Object.defineProperties(obj, Math);
obj.prop = "mathData";