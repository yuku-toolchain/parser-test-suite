var data = "data";
var newObj = Object.create({}, {
  prop: {
    set: function (value) {
      data = value;
    }
  }
});
newObj.prop = "overrideData";