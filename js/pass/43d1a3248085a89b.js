var log = [];
var iterables = Object.create(null, {
  a: {
    enumerable: false,
    get() {}
  },
  b: {
    enumerable: true,
    get() {
      log.push("get b");
      Object.defineProperty(iterables, "c", {
        enumerable: false
      });
      return ['value for b'];
    }
  },
  c: {
    enumerable: true,
    configurable: true,
    get() {}
  },
  d: {
    enumerable: true,
    get() {
      log.push("get d");
      Object.defineProperty(iterables, "e", {
        enumerable: true
      });
      return ['value for d'];
    }
  },
  e: {
    enumerable: false,
    configurable: true,
    get() {
      log.push("get e");
      return ['value for e'];
    }
  }
});
var result = Array.from(Iterator.zipKeyed(iterables));