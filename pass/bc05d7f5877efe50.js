var arrObj = [];
var data = "data";
arrObj.set = function (value) {
  data = value;
};
var newObj = Object.create({}, {
  prop: arrObj
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = "overrideData";