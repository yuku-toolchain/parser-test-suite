var callCount = 0;
var obj = {
  method({x} = {
    x: 23
  }) {
    callCount = callCount + 1;
  }
};
obj.method();