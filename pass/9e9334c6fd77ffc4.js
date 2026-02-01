const text = '𠮷a𠮷b𠮷c👨‍👩‍👧‍👦d';
function doSearch(regex) {
  return RegExp.prototype[Symbol.search].call(regex, text);
}