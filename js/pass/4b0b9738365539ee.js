function f() {
  import('./dynamic-import-module_FIXTURE.js')['then'](x => x).then(imported => {}).then($DONE, $DONE).catch($DONE);
}
f();