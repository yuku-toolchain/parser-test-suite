import('./own-keys-sort_FIXTURE.js').then(ns => {
  var stringKeys = Object.getOwnPropertyNames(ns);
  var allKeys = Reflect.ownKeys(ns);
}).then($DONE, $DONE).catch($DONE);