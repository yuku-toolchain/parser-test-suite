var callCount = 0;
var ref = async (a, b = 39) => {
  callCount = callCount + 1;
};
ref(42, undefined, 1).then(() => {}).then($DONE, $DONE);