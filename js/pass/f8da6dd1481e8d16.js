var data = "data";
var descObj = new Date(0);
var setFun = function (value) {
  data = value;
};
descObj.prop = {
  set: setFun
};
var obj = {};
Object.defineProperties(obj, descObj);
obj.prop = "dateData";