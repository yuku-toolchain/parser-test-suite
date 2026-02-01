var cout = 0;
for (var p in Object) {
  if (p === "prototype") {
    cout++;
  }
}