var numObj = new Number(123);
numObj.value = "NumValue";
var newObj = Object.create({}, {
  prop: numObj
});