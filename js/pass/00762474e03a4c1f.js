var callCount = 0;
var f = async function f() {
  callCount++;
};
f().then(() => {}, $DONE).then($DONE, $DONE);