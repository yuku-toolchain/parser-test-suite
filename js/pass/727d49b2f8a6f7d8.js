var arrayLike = {
  length: Number.MAX_SAFE_INTEGER - 3
};
Object.defineProperty(arrayLike, Number.MAX_SAFE_INTEGER - 1, {
  value: 33,
  writable: false,
  enumerable: true,
  configurable: true
});