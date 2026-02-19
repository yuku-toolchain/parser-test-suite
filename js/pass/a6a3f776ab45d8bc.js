async function fn() {
  const ns = await import('./module-code_FIXTURE.js');
  var desc = Object.getOwnPropertyDescriptor(ns, Symbol.toStringTag);
}
fn().then($DONE, $DONE).catch($DONE);