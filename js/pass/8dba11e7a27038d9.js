var callCount = 0;
var obj = {
  method({x: [y]} = {
    x: [45]
  }) {
    callCount = callCount + 1;
  }
};
obj.method();