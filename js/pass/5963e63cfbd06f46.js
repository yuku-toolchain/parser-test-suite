var callCount = 0;
var obj = {
  async *method(a = eval("var a = 42")) {
    callCount = callCount + 1;
  }
};