import('./module-code_FIXTURE.js').then(ns => {
  var desc = Object.getOwnPropertyDescriptor(ns, Symbol.toStringTag);
}).then($DONE, $DONE).catch($DONE);