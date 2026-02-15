var trappedKey = {
  get a() {
    throw new RangeError('This error should be re-thrown');
  },
  get b() {}
};