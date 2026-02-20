var x = 0;
var callCount = 0;
var ref;
ref = async function* g(x, y = x, z = y) {
  callCount = callCount + 1;
};
ref(3).next().then(() => {}).then($DONE, $DONE);