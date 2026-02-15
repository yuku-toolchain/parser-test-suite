var validModes = [undefined, "shortest", "longest", "strict"];
var invalidModes = [null, false, "", "short", "long", "loose", Symbol(), 123, 123n, {}];
Iterator.zipKeyed({}, {});
for (var mode of validModes) {
  Iterator.zipKeyed({}, {
    mode
  });
}
for (var mode of invalidModes) {}
for (var mode of invalidModes) {
  var options = {
    mode,
    get padding() {}
  };
}
for (var mode of validModes) {
  var options = {
    mode: new String(mode)
  };
}
var badMode = {
  toString() {},
  valueOf() {},
  [Symbol.toPrimitive]() {}
};