var callCount = 0;
function ref(a, b = 39) {
  callCount = callCount + 1;
}
ref(42, undefined, 1);