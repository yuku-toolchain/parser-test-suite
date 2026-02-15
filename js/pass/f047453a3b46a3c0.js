var data = "data";
var descObj = new Number(-9);
var setFun = function (value) {
  data = value;
};
descObj.prop = {
  set: setFun
};
var obj = {};
Object.defineProperties(obj, descObj);
obj.prop = "numberData";