var newObj = Object.create({}, {
  prop: {
    writable: []
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;