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
  get first() {
    log.push("padding first");
  },
  get second() {
    log.push("padding second");
    throw new ExpectedError();
  },
  get third() {
    log.push("unexpected padding third");
  }
};