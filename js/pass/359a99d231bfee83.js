async function f() {
  return await import('./eval-gtbndng-indirect-update_FIXTURE.js');
}
f().then(imported => {
  fnGlobalObject().test262update();
}).then($DONE, $DONE).catch($DONE);