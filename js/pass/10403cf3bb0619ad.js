var smoosh;
function smoosh() {}
const f = async () => await import('./module-code_FIXTURE.js');
f().then(imported => {}).then($DONE, $DONE).catch($DONE);