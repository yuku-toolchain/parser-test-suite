function CustomError() {}
var toStringThrows = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      throw new CustomError();
    }
  },
  get toString() {},
  get valueOf() {}
};
var re = /./;
Object.defineProperties(re, {
  flags: {
    get() {
      return toStringThrows;
    }
  },
  global: {
    get() {}
  },
  unicode: {
    get() {}
  }
});