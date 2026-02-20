function FACTORY() {
  this.id = 0;
  this.id = func();
  eval("function func(){return \"id_string\";}");
}
try {
  var obj = new FACTORY();
} catch (e) {
  if (e instanceof Test262Error) throw e;
}