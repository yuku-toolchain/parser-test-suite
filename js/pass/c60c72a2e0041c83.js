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
    log.push("call third next");
    return {
      done: false
    };
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