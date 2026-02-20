var data = "data";
var setFun = function (value) {
  data = value;
};
var descObj = {};
Object.defineProperty(descObj, "set", {
  get: function () {
    return setFun;
  }
});
var obj = {};
Object.defineProperties(obj, {
  prop: descObj
});
obj.prop = "overrideData";