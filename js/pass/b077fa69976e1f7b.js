var callCount = 0;
var f;
f = function ([cover = function () {}, xCover = (0, function () {})] = []) {
  callCount = callCount + 1;
};
f();