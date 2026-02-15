async function* f() {
  return await import('./dynamic-import-module_FIXTURE.js')['then'](x => x);
}
f().next().then(({value: imported}) => {}).then($DONE, $DONE).catch($DONE);