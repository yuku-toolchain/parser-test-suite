var callCount = 0;
var f;
f = ([...x] = [1]) => {
  callCount = callCount + 1;
};
f();