class C {
  get ['a']() {
    return 'A';
  }
}
class C2 {
  get b() {}
  get ['b']() {
    return 'B';
  }
}
class C3 {
  get c() {}
  get ['c']() {}
  get ['c']() {
    return 'C';
  }
}
class C4 {
  get ['d']() {}
  get d() {
    return 'D';
  }
}