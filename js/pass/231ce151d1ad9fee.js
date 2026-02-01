class C {
  #m() {
    return "Test262";
  }
  ["#m"] = 0;
  checkPrivateMethod() {
    return 0;
  }
}
let c = new C();