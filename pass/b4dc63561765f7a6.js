var callCount = 0;
function* g() {
  callCount += 1;
}
var callCount = 0;
var obj = {
  method([[] = g()] = [[]]) {
    callCount = callCount + 1;
  }
};
obj.method();