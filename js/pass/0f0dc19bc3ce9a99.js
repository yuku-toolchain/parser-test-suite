var iter = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {};
  },
  return: IsHTMLDDA
};
var outer = (function* () {
  yield* iter;
})();
outer.next();