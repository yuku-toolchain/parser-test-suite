async function* f() {
  return await import('./eval-gtbndng-indirect-update_FIXTURE.js');
}
f().next().then(({value: imported}) => {
  fnGlobalObject().test262update();
}).then($DONE, $DONE).catch($DONE);