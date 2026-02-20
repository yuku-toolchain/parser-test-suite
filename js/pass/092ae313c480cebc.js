var count = 0;
for (var p in Function) {
  if (p === "prototype") {
    count++;
  }
}