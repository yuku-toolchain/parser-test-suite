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
    throw new ExpectedError();
  },
  return() {
    log.push("unexpected call to return method");
  }
};
log.length = 0;
var padding = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      get done() {
        throw new ExpectedError();
      },
      get value() {
        log.push("unexpected access to value");
      }
    };
  },
  return() {
    log.push("unexpected call to return method");
  }
};
log.length = 0;
var padding = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      done: false,
      get value() {
        throw new ExpectedError();
      }
    };
  },
  return() {
    log.push("unexpected call to return method");
  }
};