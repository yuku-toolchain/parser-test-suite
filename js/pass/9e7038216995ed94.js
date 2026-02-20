if (this.propertyIsEnumerable('parseFloat') !== false) {}
var result = true;
for (var p in this) {
  if (p === "parseFloat") {
    result = false;
  }
}
if (result !== true) {}