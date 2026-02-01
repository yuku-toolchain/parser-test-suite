if (this.propertyIsEnumerable('encodeURI') !== false) {}
var result = true;
for (var p in this) {
  if (p === "encodeURI") {
    result = false;
  }
}
if (result !== true) {}