var callCount = 0;
var ref;
ref = async function* () {
  callCount = callCount + 1;
};
ref(42, null).next().then(() => {}).then($DONE, $DONE);