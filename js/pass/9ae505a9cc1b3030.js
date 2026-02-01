var callCount = 0;
var f;
f = ([cover = function () {}, xCover = (0, function () {})] = []) => {
  callCount = callCount + 1;
};
f();