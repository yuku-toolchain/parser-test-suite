var args = (function (a) {
  return arguments;
})(1, 2, 3);
Object.defineProperty(args, 0, {
  get: function () {}
});
args[Symbol.isConcatSpreadable] = true;