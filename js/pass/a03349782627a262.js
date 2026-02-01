var data1 = "data";
var data2 = "data";
var proto = {
  set: function (value) {
    data2 = value;
  }
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.set = function (value) {
  data1 = value;
};
var obj = {};
Object.defineProperties(obj, {
  prop: child
});
obj.prop = "overrideData";