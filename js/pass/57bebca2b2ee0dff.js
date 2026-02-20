const f = async () => await import('./dynamic-import-module_FIXTURE.js');
f().then(imported => {}).then($DONE, $DONE).catch($DONE);