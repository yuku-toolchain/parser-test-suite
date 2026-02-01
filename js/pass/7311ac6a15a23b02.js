var callCount = 0;
var obj = {
  method([cover = function () {}, xCover = (0, function () {})]) {
    callCount = callCount + 1;
  }
};
obj.method([]);