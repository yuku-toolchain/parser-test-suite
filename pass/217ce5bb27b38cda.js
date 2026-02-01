async function fn() {
  const ns = await import('./module-code_FIXTURE.js');
  var desc = Object.getOwnPropertyDescriptor(ns, 'default');
  desc = Object.getOwnPropertyDescriptor(ns, 'local1');
  desc = Object.getOwnPropertyDescriptor(ns, 'renamed');
  desc = Object.getOwnPropertyDescriptor(ns, 'indirect');
}
fn().then($DONE, $DONE).catch($DONE);