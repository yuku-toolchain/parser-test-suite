var propValue = {};
var newProto = {
  test262prop: propValue
};
var obj = {};
var result;
result = Object.setPrototypeOf(obj, newProto);