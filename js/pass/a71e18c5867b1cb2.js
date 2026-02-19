let count = 0;
async function asyncFn(x) {
  let a = arguments;
  return async function () {
    return a === arguments;
  };
}
asyncFn(1).then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);