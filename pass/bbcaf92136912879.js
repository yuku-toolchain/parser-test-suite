function fn(a) {
  let b = 1;
  var c = 1;
  const d = 1;
  {
    const a = 2;
    const b = 2;
    const c = 2;
    const d = 2;
  }
}
fn(1);