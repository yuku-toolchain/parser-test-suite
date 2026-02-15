const iter = {
  a: [4, 5, 6],
  nextCalls: 0,
  returnCalls: 0,
  next() {
    const done = this.nextCalls >= this.a.length;
    const value = this.a[this.nextCalls];
    this.nextCalls++;
    return {
      done,
      value
    };
  },
  return() {
    this.returnCalls++;
    return this;
  }
};
const setlike = {
  size: iter.a.length,
  has(v) {
    return iter.a.includes(v);
  },
  keys() {
    return iter;
  }
};
iter.nextCalls = iter.returnCalls = 0;
iter.nextCalls = iter.returnCalls = 0;