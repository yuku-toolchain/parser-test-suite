var called = 0;
var searchValue = /./g;
Object.defineProperty(searchValue, Symbol.replace, {
  value: function (O, replaceValue) {
    called += 1;
    return 42;
  }
});
Object.defineProperty(searchValue, 'toString', {
  value: function () {
    throw 'Should not call searchValue toString';
  }
});
var str = new String('Leo');
var obj = {};
var returned = str.replaceAll(searchValue, obj);