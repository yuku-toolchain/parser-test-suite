var count = 0;
for (var p in String.prototype.split) {
  if (p === "length") {
    count++;
  }
}