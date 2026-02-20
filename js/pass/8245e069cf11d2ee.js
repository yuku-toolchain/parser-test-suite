let lf = new Intl.ListFormat();
let iterator_close_call_return = {
  [Symbol.iterator]() {
    return this;
  },
  "return"() {
    this.returnIsCalled = true;
  },
  count: 0,
  returnIsCalled: false,
  next() {
    this.count++;
    if (this.count == 3) {
      return {
        done: false,
        value: 3
      };
    }
    if (this.count < 5) {
      return {
        done: false,
        value: String(this.count)
      };
    }
    return {
      done: true
    };
  }
};