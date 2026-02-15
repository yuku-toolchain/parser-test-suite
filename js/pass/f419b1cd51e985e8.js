let count = 0;
async function asyncFn(x) {
  return async () => new.target;
}
asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);