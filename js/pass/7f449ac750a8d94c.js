var x = 'outside';
var probeBefore = function () {
  return x;
};
var probeInside;
{
  var x = 'inside';
  probeInside = function () {
    return x;
  };
}