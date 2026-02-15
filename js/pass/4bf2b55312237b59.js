function fn(a) {
  try {
    throw 'stuff1';
  } catch (a) {
    a = 2;
  }
}
fn(1);