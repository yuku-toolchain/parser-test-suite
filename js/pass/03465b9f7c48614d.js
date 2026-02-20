var boolObj = new Boolean(true);
var data = "data";
boolObj.set = function (value) {
  data = value;
};
var newObj = Object.create({}, {
  prop: boolObj
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = "overrideData";