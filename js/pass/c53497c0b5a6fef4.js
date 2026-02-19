class C extends class {} {
  constructor() {
    var f = () => super();
    try {
      return 0;
    } catch (e) {
      f();
    }
  }
}