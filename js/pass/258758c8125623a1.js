async function* f() {
  return await import('./dynamic-import-module_FIXTURE.js');
}
f().next().then(({value: imported}) => {}).then($DONE, $DONE).catch($DONE);