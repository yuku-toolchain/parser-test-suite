var data = "data";
var arr = [];
var setFun = function (value) {
  data = value;
};
arr.prop = {
  set: setFun
};
var obj = {};
Object.defineProperties(obj, arr);
obj.prop = "arrData";