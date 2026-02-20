import('./module-code_FIXTURE.js').then(ns => {
  var desc;
  desc = Object.getOwnPropertyDescriptor(ns, 'local1');
  desc = Object.getOwnPropertyDescriptor(ns, 'renamed');
  desc = Object.getOwnPropertyDescriptor(ns, 'indirect');
  desc = Object.getOwnPropertyDescriptor(ns, 'default');
}).then($DONE, $DONE).catch($DONE);