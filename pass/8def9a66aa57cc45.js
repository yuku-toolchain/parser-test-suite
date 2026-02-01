var callCount = 0;
var f;
f = async function* () {
  callCount++;
};
f().next().then(() => {}, $DONE).then($DONE, $DONE);