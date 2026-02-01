var data = "data";
var setFun = function (value) {
  data = value;
};
JSON.prop = {
  set: setFun
};
var obj = {};
Object.defineProperties(obj, JSON);
obj.prop = "JSONData";