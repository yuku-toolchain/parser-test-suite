var newObj = Object.create({}, {
  prop: {
    configurable: new String("abc")
  }
});
var beforeDeleted = newObj.hasOwnProperty("prop");
delete newObj.prop;
var afterDeleted = newObj.hasOwnProperty("prop");