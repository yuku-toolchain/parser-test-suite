const f = async () => {
  await import('./eval-gtbndng-indirect-update-dflt_FIXTURE.js').then(imported => {});
};
f().then($DONE, $DONE).catch($DONE);