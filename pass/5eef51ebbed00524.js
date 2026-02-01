var initCount = 0;
var counter = function () {
  initCount += 1;
};
var x;
({x = counter()} = {
  x: IsHTMLDDA
});