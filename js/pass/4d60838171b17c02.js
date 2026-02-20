class C {
  async *method([x = (function () {})()]) {}
}
var method = C.prototype.method;