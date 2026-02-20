function f() {
  import('./eval-gtbndng-indirect-update_FIXTURE.js').then(imported => {
    fnGlobalObject().test262update();
  }).then($DONE, $DONE).catch($DONE);
}
f();