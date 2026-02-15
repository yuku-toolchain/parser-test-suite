var arr = ['a', 'b', 'c'];
var callCount = 0;
var C = class {
  *gen() {
    callCount += 1;
    yield [...yield];
  }
};
var gen = C.prototype.gen;
var iter = gen();
iter.next(false);
var item = iter.next(arr);
var value = item.value;