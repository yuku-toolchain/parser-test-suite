var newObj = Object.create({}, {
  prop: {
    writable: "false"
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;