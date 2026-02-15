var callCount = 0;
function f({cover = function () {}, xCover = (0, function () {})}) {
  callCount = callCount + 1;
}
f({});