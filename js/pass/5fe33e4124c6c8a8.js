var newObj = Object.create({}, {
  prop: {
    writable: new Error()
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;