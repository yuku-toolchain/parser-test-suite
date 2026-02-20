var n = 'outside';
var probeBefore = function () {
  return n;
};
var probeBody;
var func = function n() {
  var n;
  probeBody = function () {
    return n;
  };
};
func();