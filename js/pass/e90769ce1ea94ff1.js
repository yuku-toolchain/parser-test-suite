var arr = ['a', 'b', 'c'];
var callCount = 0;
var C = class {
  async *#gen() {
    callCount += 1;
    yield [...yield];
  }
  get gen() {
    return this.#gen;
  }
};
const c = new C();
var iter = c.gen();
iter.next(false);
var item = iter.next(arr);
item.then(({done, value}) => {}).then($DONE, $DONE);