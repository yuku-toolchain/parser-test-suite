var expected = [1, 2, 3];
var i = 0;
(function (a, b, c) {
  'use strict';
  for (var value of arguments) {
    a = b;
    b = c;
    c = i;
    i++;
  }
})(1, 2, 3);