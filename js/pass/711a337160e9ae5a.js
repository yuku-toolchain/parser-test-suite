var newObj = Object.create({}, {
  prop: {
    configurable: new Date(0)
  }
});
var beforeDeleted = newObj.hasOwnProperty("prop");
delete newObj.prop;
var afterDeleted = newObj.hasOwnProperty("prop");