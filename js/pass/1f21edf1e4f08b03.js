class C {
  #m = 'test262';
  static access(obj) {
    return obj?.#m;
  }
}
let c = new C();