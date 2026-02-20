var arr = ['a', 'b', 'c'];
var item;
var callCount = 0;
var C = class {
  static *gen() {
    callCount += 1;
    yield [...yield yield];
  }
};
var gen = C.gen;
var iter = gen();
iter.next(false);
item = iter.next(['a', 'b', 'c']);
item = iter.next(item.value);