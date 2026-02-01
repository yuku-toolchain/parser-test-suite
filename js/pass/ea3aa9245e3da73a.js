let count = 0;
var v = 1;
globalThis[Symbol.unscopables] = {
  v: true
};
{
  count++;
  var callCount = 0;
  var ref;
  ref = function* (x) {
    count++;
    with (globalThis) {
      count++;
    }
    count++;
    var v = x;
    with (globalThis) {
      count++;
      v = 20;
    }
    callCount = callCount + 1;
  };
  ref(10).next();
  count++;
}