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
  var elements = [first, second, badIterator];
  var elementsIter = elements.values();
  var iterables = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      log.push("call next");
      return elementsIter.next();
    },
    return() {
      log.push("close iterables iterator");
    }
  };
  return {
    log,
    iterables
  };
}
for (var {iterator, error} of badIterators) {
  var {log, iterables} = makeIterables(iterator);
}