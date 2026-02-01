var newObj = Object.create({}, {
  prop: {
    writable: Math
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;