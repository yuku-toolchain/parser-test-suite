var data = "data";
var newObj = Object.create({}, {
  prop: {
    set: function (value) {
      data = value;
    }
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = "overrideData";