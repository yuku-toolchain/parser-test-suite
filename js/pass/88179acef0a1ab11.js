if (this.propertyIsEnumerable('encodeURIComponent') !== false) {}
var result = true;
for (var p in this) {
  if (p === "encodeURIComponent") {
    result = false;
  }
}
if (result !== true) {}