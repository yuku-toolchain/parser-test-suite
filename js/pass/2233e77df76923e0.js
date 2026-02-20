import('./module-code_FIXTURE.js').then(ns => {
  var desc;
  desc = Object.getOwnPropertyDescriptor(ns, 'local2');
  desc = Object.getOwnPropertyDescriptor(ns, 'toStringTag');
  desc = Object.getOwnPropertyDescriptor(ns, 'iterator');
  desc = Object.getOwnPropertyDescriptor(ns, '__proto__');
}).then($DONE, $DONE).catch($DONE);