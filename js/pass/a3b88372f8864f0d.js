const text = '𠮷a𠮷b𠮷';
function doReplace(regex, replacement) {
  return RegExp.prototype[Symbol.replace].call(regex, text, replacement);
}