var count = 0;
for (var p in RegExp) {
  if (p === "prototype") {
    count++;
  }
}