let x = 'outside';
var probeBefore = function () {
  return x;
};
var probeInside;
{
  let x = 'inside';
  probeInside = function () {
    return x;
  };
}