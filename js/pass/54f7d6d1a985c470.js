var cout = 0;
for (var p in Error) {
  if (p === "prototype") {
    cout++;
  }
}