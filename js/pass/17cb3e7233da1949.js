class C extends class {} {
  constructor() {
    super();
    try {
      return 0;
    } catch (e) {
      return;
    }
  }
}