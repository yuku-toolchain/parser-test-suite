var iterable = {};
var iterator = {};
var iterationCount = 0;
var loadNextCount = 0;
iterable[Symbol.iterator] = function () {
  return iterator;
};
function next() {
  if (iterationCount) return {
    done: true
  };
  return {
    value: 45,
    done: false
  };
}
Object.defineProperty(iterator, 'next', {
  get() {
    loadNextCount++;
    return next;
  },
  configurable: true
});
for (var x of iterable) {
  Object.defineProperty(iterator, 'next', {
    get: function () {}
  });
  iterationCount++;
}