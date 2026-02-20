var calls = 0;
class C {
  set ['a'](_) {
    calls++;
  }
}
new C().a = 'A';