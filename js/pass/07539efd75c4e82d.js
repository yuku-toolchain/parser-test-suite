async function fn() {
  const ns = await import('./module-code_FIXTURE.js');
  var desc;
  desc = Object.getOwnPropertyDescriptor(ns, 'local2');
  desc = Object.getOwnPropertyDescriptor(ns, 'toStringTag');
  desc = Object.getOwnPropertyDescriptor(ns, 'iterator');
  desc = Object.getOwnPropertyDescriptor(ns, '__proto__');
}
fn().then($DONE, $DONE).catch($DONE);