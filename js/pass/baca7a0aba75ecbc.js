function* values() {
  yield 1;
}
var iterator = values();
var i = 0;
var loop = true;
outer: while (loop) {
  loop = false;
  for (var x of iterator) {
    i++;
    continue outer;
  }
}