var callCount = 0;
var C = class {
  static *#method([{x, y, z} = {
    x: 44,
    y: 55,
    z: 66
  }]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method([{
  x: 11,
  y: 22,
  z: 33
}]).next();