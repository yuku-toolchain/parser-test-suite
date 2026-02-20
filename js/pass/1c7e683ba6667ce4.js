function CustomError() {}
function WrongCustomError() {}
const errors = [{
  get [Symbol.toPrimitive]() {
    throw new CustomError();
  }
}, {
  [Symbol.toPrimitive](hint) {
    throw new CustomError();
  }
}, {
  get toString() {
    throw new CustomError();
  },
  get valueOf() {
    throw new WrongCustomError();
  }
}, {
  toString() {
    throw new CustomError();
  },
  get valueOf() {
    throw new WrongCustomError();
  }
}, {
  toString: undefined,
  get valueOf() {
    throw new CustomError();
  }
}, {
  toString: undefined,
  valueOf() {
    throw new CustomError();
  }
}, {
  toString() {
    return {};
  },
  get valueOf() {
    throw new CustomError();
  }
}, {
  toString() {
    return {};
  },
  valueOf() {
    throw new CustomError();
  }
}];
for (const input of errors) {}