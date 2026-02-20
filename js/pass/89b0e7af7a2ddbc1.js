var newObj = Object.create({}, {
  prop: {
    configurable: JSON
  }
});
var beforeDeleted = newObj.hasOwnProperty("prop");
delete newObj.prop;
var afterDeleted = newObj.hasOwnProperty("prop");