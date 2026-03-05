var smoosh;
function smoosh() {}
let f = () => {
  return import('./module-code_FIXTURE.js').then(imported => {}).then($DONE, $DONE).catch($DONE);
};
f();