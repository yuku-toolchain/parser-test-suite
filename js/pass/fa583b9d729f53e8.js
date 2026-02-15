class Base {
  constructor(o) {
    return o;
  }
}
class C extends Base {
  #m() {}
}
var obj = {};
new C(obj);