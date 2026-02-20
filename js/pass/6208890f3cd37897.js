class Base {
  constructor(o) {
    return o;
  }
}
class C extends Base {
  get #p() {}
  set #p(x) {}
}
var obj = {};
new C(obj);