var C = class {
  get #m() {
    return "Test262";
  }
  checkPrivateGetter() {
    return 0;
  }
};
let c = new C();