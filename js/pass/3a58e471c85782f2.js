function fn() {
  var c = 1;
  try {
    throw 'stuff3';
  } catch (c) {
    (function (c) {
      c = 3;
    })();
  }
}
fn();