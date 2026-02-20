const text = '𠮷a𠮷b𠮷c👨‍👩‍👧‍👦d';
function doMatch(regex) {
  return RegExp.prototype[Symbol.match].call(regex, text);
}