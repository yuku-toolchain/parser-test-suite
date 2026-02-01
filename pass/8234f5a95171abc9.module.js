import('./get-nested-namespace-dflt-skip-named_FIXTURE.js').then(ns => {
  var desc = Object.getOwnPropertyDescriptor(ns, 'namedNS2');
  var keys = Object.getOwnPropertyNames(ns.namedNS2);
  desc = Object.getOwnPropertyDescriptor(ns.namedNS2, 'namedOther');
  desc = Object.getOwnPropertyDescriptor(ns.namedNS2, 'default');
}).then($DONE, $DONE).catch($DONE);