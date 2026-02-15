function FACTORY() {
  Function("a1,a2,a3", "this.shifted=a1+a2+a3;").apply(null, arguments);
}
var obj = new FACTORY("", 1, 2);