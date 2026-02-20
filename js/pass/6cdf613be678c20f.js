var test262 = 'outer scope';
var probe;
class C {
  static {
    var test262 = 'first block';
  }
  static {
    probe = test262;
  }
}