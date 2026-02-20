function* values() {
  yield 1;
  yield 1;
}
var iterator = values();
var loop = true;
var i = 0;
outer: while (loop) {
  loop = false;
  for (var x of iterator) {
    try {
      throw new Error();
    } catch (err) {} finally {
      i++;
      continue outer;
    }
  }
}