function FACTORY() {
  this.id = 0;
  this.func = function () {
    return 5;
  };
  this.id = this.func();
}
try {
  var obj = new FACTORY();
} catch (e) {}
if (obj.id !== 5) {}