var arr = ['a', 'b', 'c'];
var callCount = 0;
async function* gen() {
  callCount += 1;
  yield [...yield];
}
var iter = gen();
iter.next(false);
var item = iter.next(arr);
item.then(({done, value}) => {}).then($DONE, $DONE);