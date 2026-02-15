var callCount = 0;
var C = class {
  *method([[x, y, z] = [4, 5, 6]]) {
    callCount = callCount + 1;
  }
};
new C().method([[7, 8, 9]]).next();