var obj = {};
var attr = {};
var accessed = false;
Object.defineProperty(obj, "property", attr);
for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}