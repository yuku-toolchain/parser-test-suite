var numObj = new Number(5);
var data = "data";
numObj.set = function (value) {
  data = value;
};
var newObj = Object.create({}, {
  prop: numObj
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = "overrideData";