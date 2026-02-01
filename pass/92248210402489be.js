var obj = {};
Object.defineProperty(obj, "property", {
  enumerable: true
});
var isEnumerable = false;
for (var item in obj) {
  if (obj.hasOwnProperty(item) && item === "property") {
    isEnumerable = true;
  }
}