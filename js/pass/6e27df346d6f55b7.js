function ToIntegerOrInfinity(arg) {
  return Number.isNaN(arg) ? 0 : Math.trunc(arg);
}
function StringSubstr(string, start, length) {
  let size = string.length;
  let intStart = ToIntegerOrInfinity(start);
  if (intStart === -Infinity) {
    intStart = 0;
  } else if (intStart < 0) {
    intStart = Math.max(size + intStart, 0);
  } else {
    intStart = Math.min(intStart, size);
  }
  let intLength = length === undefined ? size : ToIntegerOrInfinity(length);
  intLength = Math.min(Math.max(intLength, 0), size);
  let intEnd = Math.min(intStart + intLength, size);
  let result = string.substring(intStart, intEnd);
  for (let i = 0; i < result.length; ++i) {}
  return result;
}
const positiveIntegers = [0, 1, 2, 3, 4, 5, 10, 100];
const integers = [...positiveIntegers, ...positiveIntegers.map(v => -v)];
const numbers = [...integers, ...integers.map(v => v + 0.5), -Infinity, Infinity, NaN];
for (let string of ["", "a", "ab", "abc"]) {
  for (let start of numbers) {
    for (let length of [...numbers, undefined]) {
      let actual = string.substr(start, length);
      let expected = StringSubstr(string, start, length);
    }
  }
}