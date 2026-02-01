var data = "data";
var descObj = new Error("test");
descObj.description = {
  value: 11
};
descObj.message = {
  value: 11
};
descObj.name = {
  value: 11
};
var setFun = function (value) {
  data = value;
};
descObj.prop = {
  set: setFun
};
var obj = {};
Object.defineProperties(obj, descObj);
obj.prop = "errorData";