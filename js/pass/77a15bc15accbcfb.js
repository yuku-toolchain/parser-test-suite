let callCount = 0;
async function* f() {
  await import('./eval-gtbndng-indirect-update-dflt_FIXTURE.js').then(imported => {
    callCount++;
  });
}
f().next().then(() => {}).then($DONE, $DONE).catch($DONE);