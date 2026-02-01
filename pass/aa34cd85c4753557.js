class ExpectedError extends Error {}
var badIterators = [{
  iterator: "bad iterator",
  error: TypeError
}, {
  iterator: {
    get [Symbol.iterator]() {
      throw new ExpectedError();
    }
  },
  error: ExpectedError
}, {
  iterator: {
    [Symbol.iterator]() {
      throw new ExpectedError();
    }
  },
  error: ExpectedError
}, {
  iterator: {
    get next() {
      throw new ExpectedError();
    }
  },
  error: ExpectedError
}];
function makeIterables(badIterator) {
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
  var iterables = {
    first,
    second,
    badIterator
  };
  return {
    log,
    iterables
  };
}
for (var {iterator, error} of badIterators) {
  var {log, iterables} = makeIterables(iterator);
}