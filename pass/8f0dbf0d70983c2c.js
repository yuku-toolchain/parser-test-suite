let callCount = 0;
async function* f() {
  await import('./eval-gtbndng-indirect-update_FIXTURE.js').then(imported => {
    fnGlobalObject().test262update();
    callCount++;
  });
}
f().next().then(() => {}).then($DONE, $DONE).catch($DONE);