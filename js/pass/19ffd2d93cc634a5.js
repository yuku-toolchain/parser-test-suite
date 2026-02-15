var callCount = 0;
var f = async function () {
  callCount++;
};
f().then(() => {}, $DONE).then($DONE, $DONE);