function ID(x) {
  return x;
}
class C {
  a() {
    return 'A';
  }
  ['b']() {
    return 'B';
  }
  c() {
    return 'C';
  }
  [ID('d')]() {
    return 'D';
  }
}