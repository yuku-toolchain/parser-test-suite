var result = true;
for (var p in this) {
  if (p === "parseInt") {
    result = false;
  }
}