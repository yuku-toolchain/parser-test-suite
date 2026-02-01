var callCount = 0;
var f;
f = ([[x, y, z] = [4, 5, 6]] = [[7, 8, 9]]) => {
  callCount = callCount + 1;
};
f();