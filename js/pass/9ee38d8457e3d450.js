var ranCatch = false;
try {
  throw [];
} catch ([cls = class {}, xCls = class X {}, xCls2 = class {
  static name() {}
}]) {
  ranCatch = true;
}