var callCount = 0;
function f({x}) {
  callCount = callCount + 1;
}
f({
  x: 23
});