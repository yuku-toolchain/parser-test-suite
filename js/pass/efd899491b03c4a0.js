async function fn() {
  const ns = await import('./own-keys-sort_FIXTURE.js');
  var stringKeys = Object.getOwnPropertyNames(ns);
  var allKeys = Reflect.ownKeys(ns);
}
fn().then($DONE, $DONE).catch($DONE);