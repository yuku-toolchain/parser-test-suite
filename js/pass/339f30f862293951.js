var callCount = 0;
var f;
f = async function* h({w: [x, y, z] = [4, 5, 6]}) {
  callCount = callCount + 1;
};
f({
  w: [7, undefined]
}).next().then(() => {}).then($DONE, $DONE);