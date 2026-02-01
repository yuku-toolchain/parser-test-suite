["leftContext", "$`"].forEach(function (property) {
  const desc = Object.getOwnPropertyDescriptor(RegExp, property);
  [undefined, null, {}, true, false, 0, 1, "string"].forEach(function (value) {});
});