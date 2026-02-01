var args = (function (a) {
  return arguments;
})(1, 2, 3);
delete args[1];
args[Symbol.isConcatSpreadable] = true;