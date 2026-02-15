function FACTORY() {
  this.id = 0;
  this.id = func();
  function func() {
    return "id_string";
  }
}
try {
  var obj = new FACTORY();
} catch (e) {}
if (obj.id !== "id_string") {}