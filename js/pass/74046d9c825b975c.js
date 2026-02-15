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
var it = Iterator.zipKeyed({
  first,
  second,
  third
}, {
  mode: "strict"
});