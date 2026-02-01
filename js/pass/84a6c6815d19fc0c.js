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
    return {};
  }
};
var second = {
  next() {
    log.push("call second next");
    return {
      done: true
    };
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
    throw new ExpectedError();
  }
};
var it = Iterator.zipKeyed({
  first,
  second,
  third,
  fourth
}, {
  mode: "shortest"
});