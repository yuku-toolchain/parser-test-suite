if (this.propertyIsEnumerable('decodeURI') !== false) {}
var result = true;
for (var p in this) {
  if (p === "decodeURI") {
    result = false;
  }
}
if (result !== true) {}