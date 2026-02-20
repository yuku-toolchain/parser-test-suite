var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  }
};
var called = 0;
var value = undefined;
var searchValue = {
  [Symbol.match]: true,
  get flags() {
    called += 1;
    return value;
  }
};
called = 0;
value = null;