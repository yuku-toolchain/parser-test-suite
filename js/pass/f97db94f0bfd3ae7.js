class Base {
  constructor(o) {
    return o;
  }
}
class C extends Base {
  set #p(x) {}
}
var obj = {};
new C(obj);