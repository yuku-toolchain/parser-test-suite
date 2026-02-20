async function f() {
  return await import('./dynamic-import-module_FIXTURE.js')['then'](x => x);
}
f().then(imported => {}).then($DONE, $DONE).catch($DONE);