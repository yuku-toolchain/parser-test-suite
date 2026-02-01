var callCount = 0;
var f;
f = ([...x] = [1, 2]) => {
  callCount = callCount + 1;
};
f();