var newObj = Object.create({}, {
  prop: {
    writable: new String()
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;