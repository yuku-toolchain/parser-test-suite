var newObj = Object.create({}, {
  prop: {
    writable: function () {}
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;