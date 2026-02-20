var callCount = 0;
var C = class {
  static *#method({w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }} = {
    w: {
      x: undefined,
      z: 7
    }
  }) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method().next();