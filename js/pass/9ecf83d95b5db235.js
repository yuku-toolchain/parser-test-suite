var callCount = 0;
var f;
f = ([...[x, y, z]] = [3, 4, 5]) => {
  callCount = callCount + 1;
};
f();