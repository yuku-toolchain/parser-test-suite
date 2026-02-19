var errorObj = new Error();
errorObj.value = "ErrorValue";
var newObj = Object.create({}, {
  prop: errorObj
});