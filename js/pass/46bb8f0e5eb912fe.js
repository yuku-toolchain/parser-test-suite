var callCount = 0;
var f;
f = ([...x]) => {
  callCount = callCount + 1;
};
f([1, 2]);