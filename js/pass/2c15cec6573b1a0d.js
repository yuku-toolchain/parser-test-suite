var callCount = 0;
var f;
f = async function* g(_ = (function () {})()) {
  callCount = callCount + 1;
};