var searchValue = {
  get [Symbol.match]() {},
  toString() {
    throw 'Should not call toString on searchValue';
  }
};
var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  }
};