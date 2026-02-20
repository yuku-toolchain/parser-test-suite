var callCount = 0;
var obj = {
  method([[x, y, z] = [4, 5, 6]] = [[7, 8, 9]]) {
    callCount = callCount + 1;
  }
};
obj.method();