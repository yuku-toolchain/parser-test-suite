var values = [1, 2, 3, 4, 5];
var callCount = 0;
function* f([...x]) {
  callCount = callCount + 1;
}
f(values).next();