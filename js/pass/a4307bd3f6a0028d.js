var callCount = 0;
function f([fn = function () {}, xFn = function x() {}]) {
  callCount = callCount + 1;
}
f([]);