var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  }
};
var searchValue = {
  [Symbol.match]: true,
  flags: Symbol(),
  toString() {
    throw 'Should not call toString on searchValue';
  }
};
searchValue.flags = {
  toString() {}
};