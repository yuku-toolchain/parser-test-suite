function fn() {
  var a = 1;
  try {
    throw 'stuff3';
  } catch (a) {}
}
fn();