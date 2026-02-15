let count = 0;
async function asyncFn(x) {
  let a = arguments;
  return async () => a === arguments;
}
asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);