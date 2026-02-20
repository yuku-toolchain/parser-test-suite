let count = 0;
var asyncFn = async function asyncFn(x) {
  return async function () {
    return new.target;
  };
};
asyncFn(1).then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);