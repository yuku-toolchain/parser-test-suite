function makeProxyWithGetHandler(log, name, obj) {
  return new Proxy(obj, allowProxyTraps({
    get(target, propertyKey, receiver) {
      log.push(`${name}::${String(propertyKey)}`);
      return Reflect.get(target, propertyKey, receiver);
    }
  }));
}
for (var n = 0; n <= 5; ++n) {
  var iterables = Array(n).fill([]);
  for (var k = 0; k <= n + 2; ++k) {
    var elements = Array(k).fill(0);
    var elementsIter = elements.values();
    var log = [];
    var padding = makeProxyWithGetHandler(log, "padding", {
      [Symbol.iterator]() {
        log.push("call iterator");
        return this;
      },
      next() {
        log.push("call next");
        return elementsIter.next();
      },
      return() {
        log.push("call return");
        return {};
      }
    });
    Iterator.zip(iterables, {
      mode: "longest",
      padding
    });
    var expected = ["padding::Symbol(Symbol.iterator)", "call iterator", "padding::next"];
    for (var i = 0; i < Math.min(n, k); ++i) {
      expected.push("call next");
    }
    if (n > k) {
      expected.push("call next");
    } else {
      expected.push("padding::return", "call return");
    }
  }
}