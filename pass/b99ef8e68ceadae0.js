var smoosh;
function smoosh() {}
let f = () => import('./module-code_FIXTURE.js').then(imported => {});
f().then($DONE, $DONE).catch($DONE);