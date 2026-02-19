function ExpectedError() {}
var log = [];
var first = {
  next() {
    log.push("call first next");
    return {
      done: true
    };
  },
  return() {
    log.push("unexpected call first return");
  }
};
var second = {
  next() {
    log.push("call second next");
    throw new ExpectedError();
  },
  return() {
    log.push("unexpected call second return");
  }
};
var third = {
  next() {
    log.push("unexpected call third next");
  },
  return() {
    log.push("call third return");
  }
};
var fourth = {
  next() {
    log.push("unexpected call fourth next");
  },
  return() {
    log.push("call fourth return");
  }
};
var it = Iterator.zipKeyed({
  first,
  second,
  third,
  fourth
}, {
  mode: "strict"
});