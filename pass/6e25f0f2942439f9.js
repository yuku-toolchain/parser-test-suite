function f() {}
(function (x) {
  try {
    let x = 'inner';
    throw 0;
  } catch (e) {
    f();
  }
})('outer');