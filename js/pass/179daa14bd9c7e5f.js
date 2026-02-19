var callCount = 0;
class C {
  static async *method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
}