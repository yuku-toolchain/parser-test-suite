var newObj = Object.create({}, {
  prop: {
    configurable: true
  }
});
var result1 = newObj.hasOwnProperty("prop");
delete newObj.prop;
var result2 = newObj.hasOwnProperty("prop");