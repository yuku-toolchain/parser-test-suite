var expected = [1, 3, 1];
var i = 0;
(function (a, b, c) {
  for (var value of arguments) {
    a = b;
    b = c;
    c = i;
    i++;
  }
})(1, 2, 3);