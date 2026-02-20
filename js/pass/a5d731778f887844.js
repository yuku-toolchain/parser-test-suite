var newObj = Object.create({}, {
  prop: {
    writable: true
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;