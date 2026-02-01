var THERE = "I'm there";
var HERE = "I'm here";
if (__func !== undefined) {}
if (true) {
  var __func = function () {
    return HERE;
  };
} else {
  var __func = function () {
    return THERE;
  };
}
if (__func() !== HERE) {}