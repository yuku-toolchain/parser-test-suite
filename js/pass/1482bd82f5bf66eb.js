var newObj = Object.create({}, {
  prop: {
    writable: 12
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;