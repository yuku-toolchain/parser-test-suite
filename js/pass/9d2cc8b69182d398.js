var obj = {};
var accessed = false;
Object.defineProperty(obj, "property", {
  enumerable: NaN
});
for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}