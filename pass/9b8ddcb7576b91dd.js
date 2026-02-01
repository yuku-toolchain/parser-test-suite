var newObj = Object.create({}, {
  prop: {
    writable: new Date(0)
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;