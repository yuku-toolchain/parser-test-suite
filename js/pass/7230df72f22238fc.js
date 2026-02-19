async function fn() {
  const ns = await import('./empty_FIXTURE.js');
  Object.preventExtensions(ns);
}
fn().then($DONE, $DONE).catch($DONE);