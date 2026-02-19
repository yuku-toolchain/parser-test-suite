var newObj = Object.create({}, {
  prop: {
    writable: JSON
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;