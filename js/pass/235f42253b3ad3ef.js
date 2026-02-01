class ExpectedError extends Error {}
var log = [];
var first = {
  next() {
    log.push("unexpected call to next method");
  },
  return() {
    log.push("close first iterator");
  }
};
var second = {
  next() {
    log.push("unexpected call to next method");
  },
  return() {
    log.push("close second iterator");
  }
};
var iterables = new Proxy({
  first,
  second,
  third: null
}, {
  getOwnPropertyDescriptor(target, propertyKey) {
    if (propertyKey === "third") {
      throw new ExpectedError();
    }
    return Reflect.getOwnPropertyDescriptor(target, propertyKey);
  }
});