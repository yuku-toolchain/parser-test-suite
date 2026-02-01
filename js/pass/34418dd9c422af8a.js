function ExpectedError() {}
var log = [];
var first = {
  next() {
    log.push("call first next");
    return {
      done: false
    };
  },
  return() {
    log.push("call first return");
  }
};
var second = {
  next() {
    log.push("call second next");
    return {
      done: false
    };
  },
  return() {
    log.push("call second return");
    throw new ExpectedError();
  }
};
var third = {
  next() {
    log.push("call third next");
    return {
      done: false
    };
  },
  return() {
    log.push("call third return");
    return {};
  }
};
var it = Iterator.zipKeyed({
  first,
  second,
  third
});
it.next();