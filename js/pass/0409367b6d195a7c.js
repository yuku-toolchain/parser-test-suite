function fn(one) {
  var x = one + 1;
  let y = one + 2;
  const u = one + 4;
  {
    let z = one + 3;
    const v = one + 5;
    function f() {}
    f();
  }
}
fn(1);