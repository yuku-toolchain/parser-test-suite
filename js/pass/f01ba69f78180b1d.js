var callCount = 0;
var obj = {
  async *method([cls = class {}, xCls = class X {}, xCls2 = class {
    static name() {}
  }] = []) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);