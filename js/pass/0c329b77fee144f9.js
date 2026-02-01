function FACTORY() {
  Function("a1,a2,a3", "this.shifted=a1.length+a2+a3;").call(this, arguments, "", 2);
}
var obj = new FACTORY("", 4, 2, "A");