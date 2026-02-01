var obj = {
  2: "accumulator",
  3: "another"
};
Object.defineProperty(obj, "length", {
  get: function () {
    delete obj[2];
    return 5;
  },
  configurable: true
});