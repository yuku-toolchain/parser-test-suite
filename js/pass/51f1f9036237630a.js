function* g() {
  yield 0;
}
Number.prototype[Symbol.iterator] = function* () {
  let i = 0;
  let target = this >>> 0;
  while (i < target) {
    yield i;
    ++i;
  }
};
const originalStringIterator = String.prototype[Symbol.iterator];
let observedType;
Object.defineProperty(String.prototype, Symbol.iterator, {
  get() {
    'use strict';
    observedType = typeof this;
    return originalStringIterator;
  }
});
Iterator.from('');
Iterator.from(new String(''));