function assertPlainObject(actual, expected) {
  var actualKeys = Reflect.ownKeys(actual);
  var expectedKeys = Reflect.ownKeys(expected);
  for (var key of expectedKeys) {}
  for (var key of expectedKeys) {}
}
var iterables = Object.create(null, {
  a: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: ["A"]
  },
  b: {
    writable: false,
    enumerable: true,
    configurable: true,
    value: ["B"]
  },
  c: {
    writable: true,
    enumerable: true,
    configurable: false,
    value: ["C"]
  },
  d: {
    writable: false,
    enumerable: true,
    configurable: false,
    value: ["D"]
  },
  e: {
    enumerable: true,
    configurable: true,
    get() {
      return ["E"];
    }
  },
  f: {
    enumerable: true,
    configurable: false,
    get() {
      return ["F"];
    }
  }
});
var it = Iterator.zipKeyed(iterables);
var results = it.next().value;
assertPlainObject(results, {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  e: "E",
  f: "F"
});