var obj = {};
var accessed = false;
JSON.enumerable = true;
Object.defineProperty(obj, "property", JSON);
for (var prop in obj) {
  if (prop === "property") {
    accessed = true;
  }
}