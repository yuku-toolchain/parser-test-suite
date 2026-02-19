var callCount = 0;
function f(_ = (function () {})()) {
  callCount = callCount + 1;
}