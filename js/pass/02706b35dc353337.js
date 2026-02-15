var obj = {};
var accessed = false;
Object.defineProperties(obj, {
  prop: {
    enumerable: null
  }
});
for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}