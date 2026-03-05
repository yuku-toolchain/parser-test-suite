var args = (function (a, a, a) {
  return arguments;
})(1, 2, 3);
args[Symbol.isConcatSpreadable] = true;
Object.defineProperty(args, "length", {
  value: 6
});