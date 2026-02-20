var called = 0;
var replaceValue = function () {
  called += 1;
  return 'b';
};
var poisoned = 0;
Object.defineProperty(replaceValue, 'toString', {
  value: function () {
    poisoned += 1;
    throw 'should not call this';
  }
});
var result = ('aaa').replaceAll('a', replaceValue);