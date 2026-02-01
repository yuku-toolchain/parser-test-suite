let count = 0;
async function asyncFn(x) {
  return async () => x;
}
asyncFn(1).then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);