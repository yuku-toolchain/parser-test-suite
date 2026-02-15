var newObj = Object.create({}, {
  prop: {
    configurable: new Boolean(true)
  }
});
var beforeDeleted = newObj.hasOwnProperty("prop");
delete newObj.prop;
var afterDeleted = newObj.hasOwnProperty("prop");