var callCount = 0;
var f;
f = function* ({w: [x, y, z] = [4, 5, 6]} = {
  w: [7, undefined]
}) {
  callCount = callCount + 1;
};
f().next();