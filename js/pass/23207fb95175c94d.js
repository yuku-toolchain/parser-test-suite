function* values() {
  yield 1;
  yield 1;
}
var dataIterator = values();
var controlIterator = (function* () {
  for (var x of dataIterator) {
    try {} finally {
      i++;
      yield* values();
      j++;
    }
    k++;
  }
  l++;
})();
var i = 0;
var j = 0;
var k = 0;
var l = 0;
controlIterator.next();
controlIterator.next();
controlIterator.next();
controlIterator.next();
controlIterator.next();