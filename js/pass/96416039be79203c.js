async function fn() {
  const ns1 = await import(this);
}
fn.call('./module-code_FIXTURE.js').then($DONE, $DONE).catch($DONE);