var callCount = 0;
var obj = {
  method([{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }]) {
    callCount = callCount + 1;
  }
};
obj.method([{
  u: 777,
  w: 888,
  y: 999
}]);