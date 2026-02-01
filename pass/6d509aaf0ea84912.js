var callCount = 0;
var expected = ['x', 'y', 'z'];
var tag = function (templateObject) {
  callCount++;
  return tag;
};
var result = tag`x``y``z`;