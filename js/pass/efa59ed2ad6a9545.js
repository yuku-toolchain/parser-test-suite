var data = "data";
var setFun = function (value) {
  data = value;
};
var obj = {};
Object.defineProperties(obj, {
  prop: {
    set: setFun
  }
});
obj.prop = "funData";