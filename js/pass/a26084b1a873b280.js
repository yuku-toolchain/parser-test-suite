function FACTORY() {
  var obj = {};
  Function("a1,a2,a3", "this.shifted=a1+a2+a3;").apply(obj, arguments);
  return obj;
}
var obj = new FACTORY("", 1, 2);