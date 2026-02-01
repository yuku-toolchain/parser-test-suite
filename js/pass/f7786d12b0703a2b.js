var initCount = 0;
var counter = function () {
  initCount += 1;
};
var x;
[x = counter()] = [IsHTMLDDA];
var base = {};
[base.y = counter()] = [IsHTMLDDA];