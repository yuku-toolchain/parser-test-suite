var arr = ['a', 'b', 'c'];
var callCount = 0;
var gen = ({
  async *method() {
    callCount += 1;
    yield [...yield];
  }
}).method;
var iter = gen();
iter.next(false);
var item = iter.next(arr);
item.then(({done, value}) => {}).then($DONE, $DONE);