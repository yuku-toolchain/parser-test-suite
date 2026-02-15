var results = [{
  value: 1
}, {
  value: 8
}, {
  value: 34,
  done: true
}];
var idx = 0;
var iterator = {};
var iterable = {
  next: function () {
    var result = results[idx];
    idx += 1;
    return result;
  }
};
iterator[Symbol.iterator] = function () {
  return iterable;
};
function* g() {
  yield* iterator;
}
var iter = g();
var result;
result = iter.next();
result = iter.next();
result = iter.next();