class C {
  async *method([x = (function () {})()] = [undefined]) {}
}
var method = C.prototype.method;