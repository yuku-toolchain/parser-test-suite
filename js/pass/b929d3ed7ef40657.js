var callCount = 0;
var f;
f = async function* ([...x]) {
  callCount = callCount + 1;
};
f([1, 2]).next().then(() => {}).then($DONE, $DONE);