function fn() {
  var c = 1;
  try {
    throw 'stuff3';
  } catch (c) {
    try {
      throw 'stuff4';
    } catch (c) {
      c = 3;
    }
  }
}
fn(1);