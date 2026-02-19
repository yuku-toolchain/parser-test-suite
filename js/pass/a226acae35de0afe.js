function FACTORY() {
  this.id = 0;
  eval("function func(){return \"id_string\";}");
  this.id = func();
}
try {
  var obj = new FACTORY();
} catch (e) {}