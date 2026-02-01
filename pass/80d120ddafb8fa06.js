var modes = ["shortest", "longest", "strict"];
function ExpectedError() {}
var log = [];
var first = {
  next() {
    log.push("call first next");
    throw new ExpectedError();
  },
  return() {
    log.push("unexpected call first return");
  }
};
var second = {
  next() {
    log.push("unexpected call second next");
  },
  return() {
    log.push("call second return");
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
var empty = {
  next() {
    log.push("call empty next");
    return {
      done: true
    };
  },
  return() {
    log.push("unexpected call empty return");
  }
};
for (var mode of modes) {
  var it = Iterator.zip([first, second, third], {
    mode
  });
  log.length = 0;
}
var it = Iterator.zip([empty, first, second, third], {
  mode: "longest"
});