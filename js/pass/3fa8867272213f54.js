async function fn() {
  const ns = await import('./module-code_FIXTURE.js');
  var newProto = {};
}
fn().then($DONE, $DONE).catch($DONE);