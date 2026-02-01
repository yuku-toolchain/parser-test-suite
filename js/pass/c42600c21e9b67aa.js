var calls = 0;
class C {
  set ['a'](_) {
    calls++;
  }
}
new C().a = 'A';
calls = 0;
class C2 {
  set b(_) {}
  set ['b'](_) {
    calls++;
  }
}
new C2().b = 'B';
calls = 0;
class C3 {
  set c(_) {}
  set ['c'](_) {}
  set ['c'](_) {
    calls++;
  }
}
new C3().c = 'C';
calls = 0;
class C4 {
  set ['d'](_) {}
  set d(_) {
    calls++;
  }
}
new C4().d = 'D';