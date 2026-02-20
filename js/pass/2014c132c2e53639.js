var data = "data";
var proto = {
  set: function (value) {
    data = value;
  }
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
var obj = {};
Object.defineProperties(obj, {
  prop: child
});
obj.prop = "overrideData";