var data1 = "data";
var data2 = "data";
var proto = {
  set: function (value) {
    data2 = value;
  }
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
child.set = function (value) {
  data1 = value;
};
var newObj = Object.create({}, {
  prop: child
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = "overrideData";