var values = [2, 1, 3];
var callCount = 0;
var f;
f = function ([[...x] = values]) {
  callCount = callCount + 1;
};
f([]);