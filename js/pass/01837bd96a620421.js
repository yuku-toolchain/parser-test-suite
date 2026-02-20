var list = {
  '0': 41,
  '1': 42,
  '2': 43,
  length: 3
};
var calls = [];
var thisArg = {};
function mapFn(value) {
  calls.push({
    args: arguments,
    thisArg: this
  });
  return value * 2;
}
var result = Array.from(list, mapFn, thisArg);