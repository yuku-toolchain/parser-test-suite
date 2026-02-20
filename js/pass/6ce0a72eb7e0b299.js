var log = [];
var first = {
  next() {
    log.push("unexpected call to next method");
  },
  return() {
    log.push("first return");
  }
};
var second = {
  next() {
    log.push("unexpected call to next method");
  },
  return() {
    log.push("second return");
  }
};
var third = {
  next() {
    log.push("unexpected call to next method");
  },
  get return() {
    log.push("third return");
  }
};
function ExpectedError() {}
var padding = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      done: false
    };
  },
  return() {
    log.push("padding return");
    throw new ExpectedError();
  }
};