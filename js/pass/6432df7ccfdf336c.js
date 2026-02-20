var callCount = 0;
class C {
  *#method([cls = class {}, xCls = class X {}, xCls2 = class {
    static name() {}
  }] = []) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method().next();