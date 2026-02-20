var expected = [1, 4, 6];
var i = 0;
(function () {
  'use strict';
  for (var value of arguments) {
    i++;
    arguments[i] *= 2;
  }
})(1, 2, 3);