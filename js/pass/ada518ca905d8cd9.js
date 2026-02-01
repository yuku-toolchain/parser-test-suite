if (decodeURI.propertyIsEnumerable('length') !== false) {}
var result = true;
for (var p in decodeURI) {
  if (p === "length") {
    result = false;
  }
}
if (result !== true) {}