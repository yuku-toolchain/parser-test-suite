var count = 0;
class C {
  static m() {
    super.x = count += 1;
  }
}
Object.setPrototypeOf(C, null);