var C = class {
  async *m() {
    return 42;
  }
  $;
  _;
  o;
  ℘;
  ZW_‌_NJ;
  ZW_‍_J;
};
var c = new C();
c.m().next().then(function (v) {
  function assertions() {
    c.$ = 1;
    c._ = 1;
    c.o = 1;
    c.℘ = 1;
    c.ZW_‌_NJ = 1;
    c.ZW_‍_J = 1;
  }
  return Promise.resolve(assertions());
}).then($DONE, $DONE);