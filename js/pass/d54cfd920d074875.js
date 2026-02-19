var values = [1, 2, 3];
var callCount = 0;
function f([...[...x]] = values) {
  callCount = callCount + 1;
}
f();