var callCount = 0;
var f;
f = ([x, y, z]) => {
  callCount = callCount + 1;
};
f([1, 2, 3]);