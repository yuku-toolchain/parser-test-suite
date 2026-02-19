var __re = RegExp.prototype;
var count = 0;
for (var p in __re) {
  if (p === "ignoreCase") {
    count++;
  }
}