const text = '𠮷a𠮷b𠮷';
function doSearch(regex) {
  return RegExp.prototype[Symbol.search].call(regex, text);
}