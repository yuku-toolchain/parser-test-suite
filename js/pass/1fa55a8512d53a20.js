var notFound = Symbol('test262');
async function fn() {
  const ns = await import('./module-code_FIXTURE.js');
  var desc;
  desc = Object.getOwnPropertyDescriptor(ns, Symbol.toStringTag);
  desc = Object.getOwnPropertyDescriptor(ns, notFound);
}
fn().then($DONE, $DONE).catch($DONE);