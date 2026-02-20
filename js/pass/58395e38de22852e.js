var newObj = Object.create({}, {
  prop: {
    writable: -9
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;