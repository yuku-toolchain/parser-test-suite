import('./module-code_FIXTURE.js').then(ns => {
  var desc = Object.getOwnPropertyDescriptor(ns, 'default');
  desc = Object.getOwnPropertyDescriptor(ns, 'local1');
  desc = Object.getOwnPropertyDescriptor(ns, 'renamed');
  desc = Object.getOwnPropertyDescriptor(ns, 'indirect');
}).then($DONE, $DONE).catch($DONE);