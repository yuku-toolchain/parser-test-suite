var callCount = 0;
async function* f(a = eval("var a = 42")) {
  callCount = callCount + 1;
}