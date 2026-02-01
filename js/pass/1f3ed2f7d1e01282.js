if (encodeURIComponent.propertyIsEnumerable('length') !== false) {}
var result = true;
for (var p in encodeURIComponent) {
  if (p === "length") {
    result = false;
  }
}
if (result !== true) {}