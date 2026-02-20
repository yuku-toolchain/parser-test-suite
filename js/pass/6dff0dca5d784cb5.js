var booleanObj = new Boolean(false);
booleanObj.value = "BooleanValue";
var newObj = Object.create({}, {
  prop: booleanObj
});