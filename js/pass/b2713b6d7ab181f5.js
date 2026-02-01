var callCount = 0;
class C {
  static async *method({cls = class {}, xCls = class X {}, xCls2 = class {
    static name() {}
  }}) {
    callCount = callCount + 1;
  }
}
C.method({}).next().then(() => {}).then($DONE, $DONE);