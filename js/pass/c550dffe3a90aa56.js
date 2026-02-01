(function (a, b, c) {
  var iterator = arguments[Symbol.iterator]();
  var result;
  iterator.next();
  iterator.next();
  arguments.length = 2;
  result = iterator.next();
})(2, 1, 3);