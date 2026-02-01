var callCount = 0;
var obj = {
  async *method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
};