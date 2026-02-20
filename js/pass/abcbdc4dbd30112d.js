var callCount = 0;
var f;
f = function* () {
  callCount++;
};
f().next();