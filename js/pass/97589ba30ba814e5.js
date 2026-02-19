var data = "data";
this.set = function (value) {
  data = value;
};
var newObj = Object.create({}, {
  prop: this
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = "overrideData";