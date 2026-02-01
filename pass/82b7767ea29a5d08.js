class C extends class {} {
  constructor() {
    var f = () => super();
    try {
      return;
    } finally {
      f();
    }
  }
}
var o = new C();