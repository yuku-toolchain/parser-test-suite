const text = '𠮷a𠮷b𠮷';
function doExec(regex) {
  const result = regex.exec(text);
  return result ? [result[0], result.index] : null;
}
const regexWithGroupsU = /(\p{Script=Han})(.)/u;
const resultWithGroupsU = regexWithGroupsU.exec(text);
const regexWithGroupsV = /(\p{Script=Han})(.)/v;
const resultWithGroupsV = regexWithGroupsV.exec(text);
const complexText = 'a\u{20BB7}b\u{10FFFF}c';