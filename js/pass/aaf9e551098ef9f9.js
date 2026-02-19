var callCount = 0;
function f({gen = function* () {}, xGen = function* x() {}}) {
  callCount = callCount + 1;
}
f({});