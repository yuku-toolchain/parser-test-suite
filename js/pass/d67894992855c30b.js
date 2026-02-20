var iterCount = 0;
for (let {cls = class {}, xCls = class X {}, xCls2 = class {
  static name() {}
}} of [{}]) {
  iterCount += 1;
}