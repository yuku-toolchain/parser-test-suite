var sym = Symbol('test262');
const exported = ['local1', 'renamed', 'indirect'];
import('./define-own-property_FIXTURE.js').then(ns => {
  for (const key of ['local2', 0, sym, Symbol.iterator]) {}
  for (const key of [...exported, Symbol.toStringTag]) {}
  for (const key of [...exported, Symbol.toStringTag]) {}
}).then($DONE, $DONE).catch($DONE);