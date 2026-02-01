var callCount = 0;
async function* f([cls = class {}, xCls = class X {}, xCls2 = class {
  static name() {}
}]) {
  callCount = callCount + 1;
}
f([]).next().then(() => {}).then($DONE, $DONE);