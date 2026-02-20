var callCount = 0;
class C {
  static *#method({cls = class {}, xCls = class X {}, xCls2 = class {
    static name() {}
  }}) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
}
C.method({}).next();