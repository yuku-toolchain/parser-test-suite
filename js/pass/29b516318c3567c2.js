var throwingIterator = {
  next() {},
  return() {}
};
var iterableReturningThrowingIterator = {
  [Symbol.iterator]() {
    return throwingIterator;
  }
};
Iterator.zip([throwingIterator, iterableReturningThrowingIterator]);
var badIterators = [undefined, null, true, "", Symbol(), 0, 0n];
for (var iterator of badIterators) {}
var log = [];
function makeProxyWithGetHandler(name, obj) {
  return new Proxy(obj, allowProxyTraps({
    get(target, propertyKey, receiver) {
      log.push(`${name}::${String(propertyKey)}`);
      return Reflect.get(target, propertyKey, receiver);
    }
  }));
}
var elements = [makeProxyWithGetHandler("first", throwingIterator), makeProxyWithGetHandler("second", iterableReturningThrowingIterator), makeProxyWithGetHandler("third", Object.create(null))];
var elementsIter = elements.values();
var iterables = makeProxyWithGetHandler("iterables", {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    log.push("call next");
    return elementsIter.next();
  },
  return() {}
});
Iterator.zip(iterables);