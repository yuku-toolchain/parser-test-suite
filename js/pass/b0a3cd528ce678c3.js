var count = 0;
class C {
  static m() {
    super[0] = count += 1;
  }
}
Object.setPrototypeOf(C, null);