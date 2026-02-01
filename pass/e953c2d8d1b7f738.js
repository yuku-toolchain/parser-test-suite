function test(promise, valueType) {
  return promise.then(function () {}, function (error) {});
}
Promise.all([test(import('./2nd-param_FIXTURE.js'), 'undefined'), test(import('./2nd-param_FIXTURE.js'), 'null'), test(import('./2nd-param_FIXTURE.js'), 'boolean'), test(import('./2nd-param_FIXTURE.js'), 'number'), test(import('./2nd-param_FIXTURE.js'), 'symbol'), test(import('./2nd-param_FIXTURE.js'), 'bigint'), test(import('./2nd-param_FIXTURE.js'), 'object')]).then(function () {}).then($DONE, $DONE);