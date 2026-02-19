var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  }
};
var searchValue = /./;
Object.defineProperty(searchValue, 'flags', {
  value: 'G',
  writable: true,
  configurable: true
});
Object.defineProperty(searchValue, 'flags', {
  value: 'i',
  writable: true,
  configurable: true
});