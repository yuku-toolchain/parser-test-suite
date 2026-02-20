var arr = ['a', 'b', 'c'];
var item;
var callCount = 0;
function* gen() {
  callCount += 1;
  yield [...yield yield];
}
var iter = gen();
iter.next(false);
item = iter.next(['a', 'b', 'c']);
item = iter.next(item.value);