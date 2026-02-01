var arr = ['a', 'b', 'c'];
var item;
var callCount = 0;
var gen = ({
  *method() {
    callCount += 1;
    yield [...yield yield];
  }
}).method;
var iter = gen();
iter.next(false);
item = iter.next(['a', 'b', 'c']);
item = iter.next(item.value);