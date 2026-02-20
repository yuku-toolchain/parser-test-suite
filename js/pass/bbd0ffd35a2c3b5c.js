let nextGets = 0;
let nextCalls = 0;
class CountingIterator {
  get next() {
    ++nextGets;
    let iter = (function* () {
      for (let i = 1; i < 5; ++i) {
        yield i;
      }
    })();
    return function () {
      ++nextCalls;
      return iter.next();
    };
  }
}
let iterator = new CountingIterator();
iterator = Iterator.from(iterator);
iterator.toArray();