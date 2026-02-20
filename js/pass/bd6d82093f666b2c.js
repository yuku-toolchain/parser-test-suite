var arr = ['a', 'b', 'c'];
var item;
var callCount = 0;
class C {
  static async *#gen() {
    callCount += 1;
    yield [...yield yield];
  }
  static get gen() {
    return this.#gen;
  }
}
var iter = C.gen();
iter.next(false);
item = iter.next(['a', 'b', 'c']);
item.then(({done, value}) => {
  item = iter.next(value);
  item.then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);