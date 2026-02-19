var obj = {};
var accessed = false;
Object.defineProperty(obj, "property", {
  enumerable: undefined
});
for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}