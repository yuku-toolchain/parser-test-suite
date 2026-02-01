var x = 0;
var callCount = 0;
function* ref(x, y = x, z = y) {
  callCount = callCount + 1;
}
ref(3).next();