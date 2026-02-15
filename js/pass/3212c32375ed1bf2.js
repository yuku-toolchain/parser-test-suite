function MakeIterable(iterator) {
  return {
    [Symbol.iterator]() {
      return iterator;
    }
  };
}
var iterator;
iterator = Iterator.concat(MakeIterable(undefined));
iterator = Iterator.concat(MakeIterable(null));
iterator = Iterator.concat(MakeIterable(true));
iterator = Iterator.concat(MakeIterable(123));
iterator = Iterator.concat(MakeIterable(123n));
iterator = Iterator.concat(MakeIterable("abc"));
iterator = Iterator.concat(MakeIterable(Symbol()));