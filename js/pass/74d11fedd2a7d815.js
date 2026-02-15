var tag = function (templateObject, a, b, c) {
  callCount++;
};
var i = 0;
var callCount;
i = 0;
callCount = 0;
tag`a${i++}b${i++}c${i++}d`;