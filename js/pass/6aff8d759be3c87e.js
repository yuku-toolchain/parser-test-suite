var called = 0;
var searchValue = /./g;
Object.defineProperty(searchValue, Symbol.replace, {
  value: function (O, replaceValue) {
    called += 1;
    return 'return from searchValue';
  }
});
Object.defineProperty(searchValue, 'toString', {
  value: function () {
    throw 'Should not call toString on searchValue';
  }
});
var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  }
};
var returned = ('').replaceAll.call(poison, searchValue, poison);