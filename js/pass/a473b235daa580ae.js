var callCount = 0;
var ref = async (a, b) => {
  callCount = callCount + 1;
};
ref(42, 39, 1).then(() => {}).then($DONE, $DONE);