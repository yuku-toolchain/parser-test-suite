var sym = Symbol('test262');
const exported = ['local1', 'renamed', 'indirect'];
async function fn() {
  const ns = await import('./define-own-property_FIXTURE.js');
  for (const key of ['local2', 0, sym, Symbol.iterator]) {}
  for (const key of [...exported, Symbol.toStringTag]) {}
  for (const key of [...exported, Symbol.toStringTag]) {}
}
fn().then($DONE, $DONE).catch($DONE);