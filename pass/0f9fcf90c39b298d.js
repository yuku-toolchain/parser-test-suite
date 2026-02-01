var obj = {};
var accessed = false;
Object.defineProperty(obj, "property", {
  enumerable: -2
});
for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}