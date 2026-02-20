async function f() {
  return await import('./eval-gtbndng-indirect-update-dflt_FIXTURE.js');
}
f().then(imported => {}).then($DONE, $DONE).catch($DONE);