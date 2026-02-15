function same(e) {
  return e;
}
var ta;
var actual;
ta = new Int32Array([1, 0, 42]);
Object.defineProperty(ta, 'constructor', {
  get() {
    throw "it should not object the typedarray ctor";
  }
});
actual = [].flatMap.call(ta, same);
ta = new Int32Array(0);
Object.defineProperty(ta, 'constructor', {
  get() {
    throw "it should not object the typedarray ctor";
  }
});
actual = [].flatMap.call(ta, same);