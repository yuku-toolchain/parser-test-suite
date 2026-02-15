var arr = [2, 3];
var callCount = 0;
function ref() {
  callCount = callCount + 1;
}
ref(42, ...[1], ...arr);