function* values() {
  yield 1;
}
var iterator = values();
var i = 0;
var result = (function () {
  for (var x of iterator) {
    try {
      throw new Error();
    } catch (err) {
      i++;
      return 34;
    }
  }
})();