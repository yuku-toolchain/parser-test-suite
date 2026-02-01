var searchValue = {
  [Symbol.match]: true,
  get flags() {}
};
var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  }
};
var re1 = /./;
Object.defineProperty(re1, 'flags', {
  get() {}
});
var called = 0;
var re2 = /./;
Object.defineProperty(re2, Symbol.match, {
  get() {
    called += 1;
    return true;
  }
});
Object.defineProperty(re2, 'flags', {
  get() {}
});
called = 0;
var re3 = /./;
Object.defineProperty(re3, Symbol.match, {
  get() {
    called += 1;
    return 1;
  }
});
Object.defineProperty(re3, 'flags', {
  get() {}
});