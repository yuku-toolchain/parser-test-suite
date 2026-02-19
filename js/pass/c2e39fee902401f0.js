var callCount = 0;
var f;
f = ([...{length}] = [1, 2, 3]) => {
  callCount = callCount + 1;
};
f();