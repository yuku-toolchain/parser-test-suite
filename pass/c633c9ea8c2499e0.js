var arr = ['a', 'b', 'c'];
var callCount = 0;
class C {
  static *#gen() {
    callCount += 1;
    yield [...yield];
  }
  static get gen() {
    return this.#gen;
  }
}
var iter = C.gen();
iter.next(false);
var item = iter.next(arr);
var value = item.value;