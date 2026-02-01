var obj = function (a, b) {
  return a + b;
};
obj[1] = "ownProperty";
var desc = Object.getOwnPropertyDescriptor(obj, "1");