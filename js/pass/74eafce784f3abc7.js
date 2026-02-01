var CATCH_ME_IF_YOU_CAN = true;
var __func = function (message) {
  var x = 1;
  throw message;
  return x;
};
try {
  var x = __func(CATCH_ME_IF_YOU_CAN);
} catch (e) {
  if (!e) {}
}