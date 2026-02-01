var callCount = 0;
var ref;
ref = async function* g(a) {
  callCount = callCount + 1;
};
ref(42, 39).next().then(() => {}).then($DONE, $DONE);