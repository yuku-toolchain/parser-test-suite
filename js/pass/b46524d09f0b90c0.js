var argObj = (function () {
  return arguments;
})();
argObj.configurable = true;
var newObj = Object.create({}, {
  prop: argObj
});
var result1 = newObj.hasOwnProperty("prop");
delete newObj.prop;
var result2 = newObj.hasOwnProperty("prop");