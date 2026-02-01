var sym1 = Symbol();
var sym2 = Symbol();
class C {
  static a() {
    return 'A';
  }
  static [sym1]() {
    return 'B';
  }
  static c() {
    return 'C';
  }
  static [sym2]() {
    return 'D';
  }
}