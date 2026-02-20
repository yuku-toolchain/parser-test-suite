if (eval.propertyIsEnumerable('length') !== false) {}
var result = true;
for (p in eval) {
  if (p === "length") {
    result = false;
  }
}
if (result !== true) {}