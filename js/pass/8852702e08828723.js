var data = "data";
var fun = function () {
  return arguments;
};
var arg = fun();
var setFun = function (value) {
  data = value;
};
arg.prop = {
  set: setFun
};
var obj = {};
Object.defineProperties(obj, arg);
obj.prop = "argData";