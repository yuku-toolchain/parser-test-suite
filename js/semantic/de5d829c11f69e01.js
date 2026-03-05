let x = 0;
export {x, x as y};
async function fn() {
  var imported = await import('./imported-self-update.js');
  x = 1;
}
fn().then($DONE, $DONE);