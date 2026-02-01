(function (a, b, c) {
  var iterator = arguments[Symbol.iterator]();
  var result;
  iterator.next();
  iterator.next();
  iterator.next();
  iterator.next();
  arguments[3] = 4;
  arguments.length = 4;
  result = iterator.next();
})(2, 1, 3);