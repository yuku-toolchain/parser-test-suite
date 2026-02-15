var test262 = 'outer scope';
var probe;
class C {
  static {
    probe = test262;
  }
}