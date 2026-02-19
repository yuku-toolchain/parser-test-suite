var data = "data";
var descFun = function () {};
var setFun = function (value) {
  data = value;
};
descFun.prop = {
  set: setFun
};
var obj = {};
Object.defineProperties(obj, descFun);
obj.prop = "funData";