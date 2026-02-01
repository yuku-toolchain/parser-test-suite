var Cc;
var Cm;
var Cgx;
var Csx;
var Cv = class C {
  constructor() {
    Cc = C;
  }
  m() {
    Cm = C;
  }
  get x() {
    Cgx = C;
  }
  set x(_) {
    Csx = C;
  }
};
new Cv();
new Cv().m();
new Cv().x;
new Cv().x = 1;