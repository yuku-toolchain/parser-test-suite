async function fn() {
  const ns = await import('./empty_FIXTURE.js');
}
fn().then($DONE, $DONE).catch($DONE);