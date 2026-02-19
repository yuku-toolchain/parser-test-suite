const values = [undefined, null, true, false, 0, -0, 1, NaN, Infinity, "string", Symbol(), 0n, {}, [], () => {}];
let iter = values[Symbol.iterator]();
let assertionCount = 0;
let initialValue = {};
let result = iter.reduce((memo, v, count) => {
  if (count == 0) {} else {}
  ++assertionCount;
  return v;
}, initialValue);