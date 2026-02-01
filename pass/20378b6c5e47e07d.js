let x = 0;
while (!x) {
  x++;
  import('./eval-gtbndng-indirect-update_FIXTURE.js').then(imported => {
    fnGlobalObject().test262update();
  }).then($DONE, $DONE).catch($DONE);
}