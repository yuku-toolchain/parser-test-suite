var arg = (function () {
  return arguments;
})("ownProperty", true);
var desc = Object.getOwnPropertyDescriptor(arg, "0");