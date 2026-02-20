var values = [2, 1, 3];
var callCount = 0;
var f;
f = ([[...x] = values] = []) => {
  callCount = callCount + 1;
};
f();