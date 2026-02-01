var x = 0;
var callCount = 0;
var obj = {
  async *method(x = x) {
    callCount = callCount + 1;
  }
};