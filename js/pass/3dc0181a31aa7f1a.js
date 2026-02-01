var callCount = 0;
var obj = {
  method(x = arguments[2], y = arguments[3], z) {
    callCount = callCount + 1;
  }
};
obj.method(undefined, undefined, 'third', 'fourth');