var value = null;
class C {
  static {
    value = new.target;
  }
}