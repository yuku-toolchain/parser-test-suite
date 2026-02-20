class C {
  static async *method([x = (function () {})()] = [undefined]) {}
}
var method = C.method;