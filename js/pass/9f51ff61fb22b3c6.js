function f() {}
(function (x) {
  label: {
    let x = 'inner';
    break label;
  }
  f();
})('outer');