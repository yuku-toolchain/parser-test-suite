if (decodeURIComponent.propertyIsEnumerable('length') !== false) {}
var result = true;
for (var p in decodeURIComponent) {
  if (p === "length") {
    result = false;
  }
}
if (result !== true) {}