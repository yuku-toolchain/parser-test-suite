class C {
  static m() {
    delete super.x;
  }
}
Object.setPrototypeOf(C, null);