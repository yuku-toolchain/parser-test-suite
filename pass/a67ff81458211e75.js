var notFound = Symbol('test262');
import('./module-code_FIXTURE.js').then(ns => {
  var desc;
  desc = Object.getOwnPropertyDescriptor(ns, Symbol.toStringTag);
  desc = Object.getOwnPropertyDescriptor(ns, notFound);
}).then($DONE, $DONE).catch($DONE);