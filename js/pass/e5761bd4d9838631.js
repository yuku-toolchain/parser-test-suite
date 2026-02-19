var callCount = 0;
var f;
f = ([x = 23] = []) => {
  callCount = callCount + 1;
};
f();