let called = 0;
class RE extends RegExp {
  [Symbol.replace](...args) {
    const actual = super[Symbol.replace](...args);
    called += 1;
    return actual;
  }
  toString() {
    throw 'Should not call toString on searchValue';
  }
}
const t = (function () {
  return this;
})();
let calls;
function getFn(val) {
  return function replaceValueFn(...args) {
    calls.push([this, ...args]);
    return val;
  };
}
const samples = [['(a)', 'aaa abc', 'z', 'zzz zbc'], ['(a)', 'aaa abc', '$1', '$1$1$1 $1bc'], ['(a)', 'aaa abc', '$$', '$$$$$$ $$bc'], ['(a)', 'aaa abc', '$&', '$&$&$& $&bc'], ['(a)', 'aaa abc', '$\'', '$\'$\'$\' $\'bc'], ['(a)', 'aaa abc', '$`', '$`$`$` $`bc']];
let count = 0;
for (const [reStr, thisValue, replaceValue, expected] of samples) {
  const searchValue = new RE(reStr, 'g');
  const replaceFn = getFn(replaceValue);
  const obj = new String(thisValue);
  called = 0;
  calls = [];
  const actual = obj.replaceAll(searchValue, replaceFn);
  const message = `sample ${count}: '${thisValue}'.replaceAll(/${reStr}/g, () => '${replaceValue}')`;
  count += 1;
}
const samplesSticky = [['(a)', 'aaa abc', 'z', 'zzz abc'], ['(a)', 'aaa abc', '$1', '$1$1$1 abc'], ['(a)', 'aaa abc', '$$', '$$$$$$ abc'], ['(a)', 'aaa abc', '$&', '$&$&$& abc'], ['(a)', 'aaa abc', '$\'', '$\'$\'$\' abc'], ['(a)', 'aaa abc', '$`', '$`$`$` abc']];
count = 0;
for (const [reStr, thisValue, replaceValue, expected] of samplesSticky) {
  const searchValue = new RE(reStr, 'gy');
  const replaceFn = getFn(replaceValue);
  const obj = new String(thisValue);
  called = 0;
  calls = [];
  const actual = obj.replaceAll(searchValue, replaceFn);
  const message = `sample ${count}: '${thisValue}'.replaceAll(/${reStr}/gy, () => '${replaceValue}')`;
  count += 1;
}