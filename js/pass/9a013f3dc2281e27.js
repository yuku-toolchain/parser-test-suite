class C extends class {} {
  constructor() {
    try {
      return 0;
    } catch (e) {
      super();
    }
  }
}