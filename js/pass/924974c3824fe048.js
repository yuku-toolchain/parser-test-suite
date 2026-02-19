var test262 = 'outer scope';
var probe1, probe2;
class C {
  static {
    var test262 = 'first block';
    probe1 = test262;
  }
  static {
    var test262 = 'second block';
    probe2 = test262;
  }
}