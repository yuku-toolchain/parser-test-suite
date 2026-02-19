var newObj = Object.create({}, {
  prop: {
    writable: new RegExp()
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;