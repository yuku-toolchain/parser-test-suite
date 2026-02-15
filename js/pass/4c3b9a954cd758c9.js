class Base {
  constructor(o) {
    return o;
  }
}
class C extends Base {
  get #p() {}
}
var obj = {};
new C(obj);