class C {
  get #m() {
    return "Test262";
  }
  ["#m"] = 0;
  checkPrivateGetter() {
    return 0;
  }
}
let c = new C();