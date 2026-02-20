let r = [];
async function aiter() {
  for await (let imported of [import('./for-await-resolution-and-error-a_FIXTURE.js'), import('./for-await-resolution-and-error-b_FIXTURE.js'), import('./for-await-resolution-and-error-poisoned_FIXTURE.js'), import('./for-await-resolution-and-error-a_FIXTURE.js')]) {
    r.push(imported.x);
  }
}
aiter().then(() => {
  throw 'The async function should not resolve';
}, error => {}).then($DONE, $DONE);