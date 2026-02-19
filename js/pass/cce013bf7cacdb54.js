var callCount = 0;
var obj = {
  method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
};