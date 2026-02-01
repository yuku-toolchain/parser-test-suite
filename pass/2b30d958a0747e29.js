function* values() {
  yield 1;
}
var iterator = values();
var i = 0;
var result = (function () {
  for (var x of iterator) {
    try {
      i++;
      return 34;
    } catch (err) {}
  }
})();