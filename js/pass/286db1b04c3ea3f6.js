var callCount = 0;
class C {
  async *method({cls = class {}, xCls = class X {}, xCls2 = class {
    static name() {}
  }} = {}) {
    callCount = callCount + 1;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);