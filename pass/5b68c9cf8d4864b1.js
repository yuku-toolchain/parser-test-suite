var argObj = (function () {
  return arguments;
})();
argObj.value = "ArgValue";
var newObj = Object.create({}, {
  prop: argObj
});