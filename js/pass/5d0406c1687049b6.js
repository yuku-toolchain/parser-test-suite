var callCount = 0;
var iterSpy = Object.defineProperty({}, Symbol.iterator, {
  get: function () {
    callCount += 1;
  }
});
function* g() {
  yield iterSpy;
}
var iter = g();
var result;
result = iter.next();
result = iter.next();