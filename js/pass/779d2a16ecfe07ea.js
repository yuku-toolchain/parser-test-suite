var obj = {};
var accessed = false;
Object.defineProperty(obj, "property", {
  enumerable: new Date(0)
});
for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}