class C {
  static async *method([x = (function () {})()]) {}
}
var method = C.method;