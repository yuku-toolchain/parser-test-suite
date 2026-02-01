var callCount = 0;
var ref;
ref = async function* g(a, b) {
  callCount = callCount + 1;
};
ref(42, 39, 1).next().then(() => {}).then($DONE, $DONE);