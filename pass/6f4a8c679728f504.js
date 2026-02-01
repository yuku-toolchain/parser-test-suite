var newObj = Object.create({}, {
  prop: {
    writable: "abc"
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;