var count = 0;
for (var p in RegExp.prototype.exec) {
  if (p === "length") {
    count++;
  }
}