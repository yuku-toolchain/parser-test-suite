var callCount = 0;
var gen = function* () {
  callCount += 1;
  return (function (arg) {
    var yield = arg + 1;
    return yield;
  })(yield);
};
var iter = gen();
var item = iter.next();
item = iter.next(42);