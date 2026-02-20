const throws = function () {};
function makeIterable(obj, iteratorFn) {
  obj[Symbol.iterator] = iteratorFn;
  return obj;
}