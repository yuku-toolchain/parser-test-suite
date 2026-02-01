var arr = ['a', 'b', 'c'];
var callCount = 0;
class C {
  static *gen() {
    callCount += 1;
    yield [...yield];
  }
}
var gen = C.gen;
var iter = gen();
iter.next(false);
var item = iter.next(arr);
var value = item.value;