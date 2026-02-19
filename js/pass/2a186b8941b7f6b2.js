var callCount = 0;
class C {
  async *method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
}