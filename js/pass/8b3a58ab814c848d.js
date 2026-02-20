var arr = ['a', 'b', 'c'];
var item;
var callCount = 0;
var C = class {
  async *gen() {
    callCount += 1;
    yield [...yield yield];
  }
};
var gen = C.prototype.gen;
var iter = gen();
iter.next(false);
item = iter.next(['a', 'b', 'c']);
item.then(({done, value}) => {
  item = iter.next(value);
  item.then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);