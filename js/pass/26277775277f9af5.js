const f = async () => {
  await import('./dynamic-import-module_FIXTURE.js').then(imported => {});
};
f().then($DONE, $DONE).catch($DONE);