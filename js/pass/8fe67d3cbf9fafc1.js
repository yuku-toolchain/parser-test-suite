var callCount = 0;
var C = class {
  static *#method({cls = class {}, xCls = class X {}, xCls2 = class {
    static name() {}
  }} = {}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method().next();