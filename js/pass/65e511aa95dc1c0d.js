var newObj = Object.create({}, {
  prop: {
    writable: new Number()
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;