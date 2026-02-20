class C extends class {} {
  constructor() {
    try {
      throw null;
    } catch (e) {
      return;
    } finally {
      super();
    }
  }
}
var o = new C();