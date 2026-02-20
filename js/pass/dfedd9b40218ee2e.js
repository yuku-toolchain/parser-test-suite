(function (a, b, c) {
  'use strict';
  var iterator = arguments[Symbol.iterator]();
  var result;
  iterator.next();
  iterator.next();
  arguments.length = 4;
  arguments[3] = 5;
  result = iterator.next();
  result = iterator.next();
  result = iterator.next();
})(2, 1, 3);