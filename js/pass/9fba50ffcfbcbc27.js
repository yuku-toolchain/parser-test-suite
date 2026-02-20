function* values() {
  yield 1;
  yield 1;
}
var iterator = values();
var i = 0;
for (var x of iterator) {
  try {
    throw new Error();
  } catch (err) {
    i++;
    continue;
  }
}