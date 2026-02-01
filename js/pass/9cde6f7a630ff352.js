var accessed = false;
var argObj = (function () {
  return arguments;
})();
argObj.enumerable = true;
var newObj = Object.create({}, {
  prop: argObj
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}