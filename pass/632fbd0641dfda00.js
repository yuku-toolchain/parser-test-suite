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
var elements = [first, second];
var elementsIter = elements.values();
var iterables = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    log.push("call next");
    var result = elementsIter.next();
    if (result.done) {
      throw new ExpectedError();
    }
    return result;
  },
  return() {
    log.push("UNEXPECTED - close iterables iterator");
  }
};