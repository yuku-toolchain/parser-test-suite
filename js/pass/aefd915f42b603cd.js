var callCount = 0;
var ref;
ref = async function* g() {
  callCount = callCount + 1;
};
ref(42, undefined).next().then(() => {}).then($DONE, $DONE);