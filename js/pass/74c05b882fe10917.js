const text = '𠮷a𠮷b𠮷';
function doMatchAll(regex) {
  const result = Array.from(RegExp.prototype[Symbol.matchAll].call(regex, text));
  const matches = result.map(m => m[0]);
  const indices = result.map(m => m.index);
  return matches.concat(indices);
}
const complexText = 'a\u{20BB7}b\u{10FFFF}c';