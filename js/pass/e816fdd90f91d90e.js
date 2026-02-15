var newObj = Object.create({}, {
  prop: {
    writable: new Boolean(false)
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;