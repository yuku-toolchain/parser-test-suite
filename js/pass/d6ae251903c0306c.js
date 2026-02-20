var callCount = 0;
var f;
f = async function* (_ = (function () {})()) {
  callCount = callCount + 1;
};