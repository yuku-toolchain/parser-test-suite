function foo() {
  var a = {
    a: 10
  };
  with (a) {
    return () => a;
  }
}