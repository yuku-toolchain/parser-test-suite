var test262 = 'outer scope';
var probe;
class C {
  static {
    let test262 = 'first block';
  }
  static {
    probe = test262;
  }
}