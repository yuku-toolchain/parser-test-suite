function setLength(length) {
  Object.defineProperty(TypedArray.prototype, "length", {
    get: () => length
  });
}