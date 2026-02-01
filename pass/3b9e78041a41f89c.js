var x = "b";
class C {
  static *m() {
    return 42;
  }
  [x] = 42;
  [10] = "meep";
  ["not initialized"];
}
var c = new C();