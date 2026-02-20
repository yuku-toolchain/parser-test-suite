var errObj = new Error("error");
var data = "data";
errObj.set = function (value) {
  data = value;
};
var newObj = Object.create({}, {
  prop: errObj
});
newObj.prop = "overrideData";