function ID(x) {
  return x;
}
var sym1 = Symbol();
var sym2 = Symbol();
var object = {
  a() {
    return 'A';
  },
  [sym1]() {
    return 'B';
  },
  c() {
    return 'C';
  },
  [ID(sym2)]() {
    return 'D';
  }
};