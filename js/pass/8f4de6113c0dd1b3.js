var arr = ['a', 'b', 'c'];
var item;
var callCount = 0;
class C {
  *#gen() {
    callCount += 1;
    yield [...yield yield];
  }
  get gen() {
    return this.#gen;
  }
}
const c = new C();
var iter = c.gen();
iter.next(false);
item = iter.next(['a', 'b', 'c']);
item = iter.next(item.value);