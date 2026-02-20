var sym = Symbol('test262');
async function fn() {
  const ns = await import('./module-code_FIXTURE.js');
}
fn().then($DONE, $DONE).catch($DONE);