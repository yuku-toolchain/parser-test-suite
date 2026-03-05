var callCount = 0;
var gen = ({
  *method() {
    callCount += 1;
    return (function (arg) {
      var yield = arg + 1;
      return yield;
    })(yield);
  }
}).method;
var iter = gen();
var item = iter.next();
item = iter.next(42);