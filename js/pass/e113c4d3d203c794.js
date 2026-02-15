var data = "data";
Math.set = function (value) {
  data = value;
};
var newObj = Object.create({}, {
  prop: Math
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = "overrideData";