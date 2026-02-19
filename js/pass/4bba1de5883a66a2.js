var newObj = Object.create({}, {
  prop: {
    writable: new Boolean()
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;