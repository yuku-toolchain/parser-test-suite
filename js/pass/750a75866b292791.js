var count = 0;
var callCount = 0;
var f;
f = async function* h({...x} = {
  get v() {
    count++;
    return 2;
  }
}) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);