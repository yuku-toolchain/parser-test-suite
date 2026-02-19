var arr = [2, 3];
var callCount = 0;
var ref;
ref = async function* () {
  callCount = callCount + 1;
};
ref(42, ...[1], ...arr).next().then(() => {}).then($DONE, $DONE);