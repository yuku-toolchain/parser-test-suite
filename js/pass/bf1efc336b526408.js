let callCount = 0;
async function* f() {
  await import('./dynamic-import-module_FIXTURE.js').then(imported => {
    callCount++;
  });
}
f().next().then(() => {}).then($DONE, $DONE).catch($DONE);