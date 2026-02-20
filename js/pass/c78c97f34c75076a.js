var callCount = 0;
class C {
  method({x: [y]}) {
    callCount = callCount + 1;
  }
}
new C().method({
  x: [45]
});