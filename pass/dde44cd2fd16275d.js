function* values() {
  yield 1;
}
var iterator = values();
var i = 0;
outer: while (true) {
  for (var x of iterator) {
    try {
      i++;
      break outer;
    } catch (err) {}
  }
}