function FACTORY() {
  this.id = 0;
  this.id = this.func();
  this.func = function () {
    return 5;
  };
}
try {
  var obj = new FACTORY();
} catch (e) {
  if (e instanceof Test262Error) throw e;
}