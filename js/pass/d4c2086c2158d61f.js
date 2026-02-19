const f = async () => await import('./dynamic-import-module_FIXTURE.js')['then'](x => x);
f().then(imported => {}).then($DONE, $DONE).catch($DONE);