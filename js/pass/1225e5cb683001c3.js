async function f() {
  await import('./eval-gtbndng-indirect-update_FIXTURE.js').then(imported => {
    fnGlobalObject().test262update();
  });
}
f().then($DONE, $DONE).catch($DONE);