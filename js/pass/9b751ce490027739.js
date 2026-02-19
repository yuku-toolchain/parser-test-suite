var newObj = Object.create({}, {
  prop: {
    writable: this
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;