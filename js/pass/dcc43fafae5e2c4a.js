function abruptCompletion() {}
let neverExecuted = false;
function sideEffect() {
  neverExecuted = true;
}
class C {
  a = abruptCompletion();
  b = sideEffect();
}