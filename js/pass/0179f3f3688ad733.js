var argObj = (function () {
  return arguments;
})();
argObj.writable = true;
var newObj = Object.create({}, {
  prop: argObj
});
var beforeWrite = newObj.hasOwnProperty("prop") && typeof newObj.prop === "undefined";
newObj.prop = "isWritable";
var afterWrite = newObj.prop === "isWritable";