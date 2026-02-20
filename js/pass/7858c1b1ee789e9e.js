let test262 = 'outer scope';
let probe1, probe2;
class C {
  static {
    let test262 = 'first block';
    probe1 = test262;
  }
  static {
    let test262 = 'second block';
    probe2 = test262;
  }
}