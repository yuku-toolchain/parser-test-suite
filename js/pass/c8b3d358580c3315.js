for (let i = 1; i <= 9; i++) {
  const property = "$" + i;
  const desc = Object.getOwnPropertyDescriptor(RegExp, property);
  [undefined, null, {}, true, false, 0, 1, "string"].forEach(function (value) {});
}