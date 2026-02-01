var obj = {};
var accessed = false;
Object.defineProperty(obj, "property", {
  enumerable: new Error()
});
for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}