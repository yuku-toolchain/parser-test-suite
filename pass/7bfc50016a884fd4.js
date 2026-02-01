var data = "data";
var descStr = new String();
var setFun = function (value) {
  data = value;
};
descStr.prop = {
  set: setFun
};
var obj = {};
Object.defineProperties(obj, descStr);
obj.prop = "strData";