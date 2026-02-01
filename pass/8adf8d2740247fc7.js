var obj = {
  0: 11,
  1: 12
};
Object.defineProperty(obj, "length", {
  get: function () {},
  configurable: true
});