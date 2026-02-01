var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  }
};
var searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]() {},
  toString() {
    throw 'Should not call toString on searchValue';
  }
};