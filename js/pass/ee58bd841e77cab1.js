function fn(a) {
  let b = 1;
  var c = 1;
  const d = 1;
  (function (a, b, c, d) {
    a = 2;
    b = 2;
    c = 2;
    d = 2;
  })(1, 1);
}
fn(1);