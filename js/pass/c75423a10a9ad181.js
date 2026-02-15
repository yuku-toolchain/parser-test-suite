var obj = {};
var accessed = false;
var descObj = {
  enumerable: true
};
Object.defineProperties(obj, {
  prop: descObj
});
for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}