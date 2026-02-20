var callCount = 0;
var f;
f = async () => {
  callCount++;
};
f().then(() => {}, $DONE).then($DONE, $DONE);