var callCount = 0;
var obj = {
  method({w: [x, y, z] = [4, 5, 6]}) {
    callCount = callCount + 1;
  }
};
obj.method({
  w: [7, undefined]
});