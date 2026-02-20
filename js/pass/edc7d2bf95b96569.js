async function fn() {
  const ns = await import('./module-code_FIXTURE.js');
  var desc;
  desc = Object.getOwnPropertyDescriptor(ns, 'local1');
  desc = Object.getOwnPropertyDescriptor(ns, 'renamed');
  desc = Object.getOwnPropertyDescriptor(ns, 'indirect');
  desc = Object.getOwnPropertyDescriptor(ns, 'default');
}
fn().then($DONE, $DONE).catch($DONE);