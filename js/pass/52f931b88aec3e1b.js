function* values() {
  yield 1;
}
var iterator = values();
var i = 0;
for (var x of iterator) {
  try {
    i++;
    break;
  } catch (err) {}
}