function ID(x) {
  return x;
}
class C {
  a() {
    return 'A';
  }
  [1]() {
    return 'B';
  }
  c() {
    return 'C';
  }
  [ID(2)]() {
    return 'D';
  }
}