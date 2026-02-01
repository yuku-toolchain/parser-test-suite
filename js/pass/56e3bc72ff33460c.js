var s = Symbol();
var A = {
  get ["a"]() {
    return "A";
  },
  get [1]() {
    return 1;
  },
  get [s]() {
    return s;
  }
};