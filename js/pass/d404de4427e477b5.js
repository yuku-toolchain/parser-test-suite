var count = 0;
var callCount = 0;
var f;
f = function* ({...x} = {
  get v() {
    count++;
    return 2;
  }
}) {
  callCount = callCount + 1;
};
f().next();