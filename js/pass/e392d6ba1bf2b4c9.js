var functionInvocationCount = 0;
var newInvocationCount = 0;
function F() {
  if ((_ => new.target)() !== undefined) {
    newInvocationCount++;
  }
  functionInvocationCount++;
}
F();
new F();