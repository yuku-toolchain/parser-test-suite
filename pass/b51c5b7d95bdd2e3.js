var arr = ['a', 'b', 'c'];
var callCount = 0;
var gen = ({
  *method() {
    callCount += 1;
    yield [...yield];
  }
}).method;
var iter = gen();
iter.next(false);
var item = iter.next(arr);
var value = item.value;