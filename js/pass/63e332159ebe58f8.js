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
var symbol = {
  next() {
    log.push("unexpected call to next method");
  },
  return() {
    log.push("unexpected call to return method");
  }
};
var arrayIndex = {
  next() {
    log.push("unexpected call to next method");
  },
  return() {
    log.push("close array-indexed iterator");
  }
};
var iterables = {
  [Symbol()]: symbol,
  first,
  second,
  get third() {
    throw new ExpectedError();
  },
  5: arrayIndex
};