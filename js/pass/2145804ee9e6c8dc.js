var obj = {};
var descObj = new Error();
var accessed = false;
descObj.enumerable = true;
Object.defineProperties(obj, {
  prop: descObj
});
for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}