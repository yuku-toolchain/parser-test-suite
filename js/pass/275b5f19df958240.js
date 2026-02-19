var throwingIterator = {
  next() {},
  return() {}
};
var iterableReturningThrowingIterator = {
  [Symbol.iterator]() {
    return throwingIterator;
  }
};
Iterator.zipKeyed({
  a: throwingIterator,
  b: iterableReturningThrowingIterator
});
var badIterators = [null, true, "", Symbol(), 0, 0n];
for (var iterator of badIterators) {}
var log = [];
function makeProxyWithGetHandler(name, obj) {
  return new Proxy(obj, allowProxyTraps({
    ownKeys(target) {
      log.push(`${name}::[[OwnPropertyKeys]]}`);
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(target, propertyKey) {
      log.push(`${name}::[[GetOwnProperty]](${String(propertyKey)})`);
      return Reflect.getOwnPropertyDescriptor(target, propertyKey);
    },
    get(target, propertyKey, receiver) {
      log.push(`${name}::[[Get]](${String(propertyKey)})`);
      return Reflect.get(target, propertyKey, receiver);
    }
  }));
}
var iterables = makeProxyWithGetHandler("iterables", {
  a: makeProxyWithGetHandler("first", throwingIterator),
  b: makeProxyWithGetHandler("second", iterableReturningThrowingIterator),
  c: makeProxyWithGetHandler("third", {})
});
Iterator.zipKeyed(iterables);