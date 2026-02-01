var obj = {
  1: "accumulator",
  2: "another"
};
Object.defineProperty(obj, "length", {
  get: function () {
    delete obj[1];
    return 3;
  },
  configurable: true
});