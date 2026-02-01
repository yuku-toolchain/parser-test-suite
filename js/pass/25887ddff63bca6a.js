var data = "data";
var descObj = new Boolean(false);
var setFun = function (value) {
  data = value;
};
descObj.prop = {
  set: setFun
};
var obj = {};
Object.defineProperties(obj, descObj);
obj.prop = "booleanData";