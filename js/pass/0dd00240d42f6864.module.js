async function fn() {
  const ns = await import('./empty_FIXTURE.js');
  var sym = Symbol('test262');
}
fn().then($DONE, $DONE).catch($DONE);