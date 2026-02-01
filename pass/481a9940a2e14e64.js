class Base {
  constructor(o) {
    return o;
  }
}
class C extends Base {
  #field;
  m() {
    var init = () => new C(this);
    var object = {
      get a() {
        init();
        return "pass";
      }
    };
    ({a: this.#field} = object);
  }
}
C.prototype.m.call({});