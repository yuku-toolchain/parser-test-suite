var arr = ['a', 'b', 'c'];
var callCount = 0;
var gen = async function* g() {
  callCount += 1;
  yield [...yield];
};
var iter = gen();
iter.next(false);
var item = iter.next(arr);
item.then(({done, value}) => {}).then($DONE, $DONE);