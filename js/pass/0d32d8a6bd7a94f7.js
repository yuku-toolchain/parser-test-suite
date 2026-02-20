var xCls, cls, xCls2;
var counter = 0;
for ({x: xCls = class x {}, x: cls = class {}, x: xCls2 = class {
  static name() {}
}} of [{}]) {
  counter += 1;
}