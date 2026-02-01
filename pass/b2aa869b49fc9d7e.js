var arr = ['a', 'b', 'c'];
var callCount = 0;
var gen = function* () {
  callCount += 1;
  yield [...yield];
};
var iter = gen();
iter.next(false);
var item = iter.next(arr);
var value = item.value;