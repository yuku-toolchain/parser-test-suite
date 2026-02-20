var callCount = 0;
var obj = {
  method([{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }] = []) {
    callCount = callCount + 1;
  }
};
obj.method();