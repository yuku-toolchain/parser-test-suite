function fn() {
  var x = function () {
    this.foo = 42;
  };
  var result = new x(x = 1);
}
fn();