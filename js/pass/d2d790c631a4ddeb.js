var data = "data";
var proto = {
  set: function (value) {
    data = value;
  }
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
var newObj = Object.create({}, {
  prop: child
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = "overrideData";