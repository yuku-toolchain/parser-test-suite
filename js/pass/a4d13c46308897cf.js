class C extends class {} {
  constructor() {
    var f = () => super();
    try {
      throw null;
    } catch (e) {
      return;
    } finally {
      f();
    }
  }
}
var o = new C();