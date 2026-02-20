var count = 0;
for (var p in RegExp.prototype.test) {
  if (p === "length") {
    count++;
  }
}