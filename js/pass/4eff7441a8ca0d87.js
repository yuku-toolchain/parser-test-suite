function ID(x) {
  return x;
}
var object = {
  a() {
    return 'A';
  },
  ['b']() {
    return 'B';
  },
  c() {
    return 'C';
  },
  [ID('d')]() {
    return 'D';
  }
};