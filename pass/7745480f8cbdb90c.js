var count = 0;
for (var p in RegExp.prototype.toString) {
  if (p === "length") {
    count++;
  }
}