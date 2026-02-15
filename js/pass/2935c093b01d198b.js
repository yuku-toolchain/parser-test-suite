var argObj = (function () {
  return arguments;
})();
var newObj = Object.create({}, {
  prop: {
    writable: argObj
  }
});
var hasProperty = newObj.hasOwnProperty("prop");
newObj.prop = 121;