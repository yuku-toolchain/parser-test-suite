var callCount = 0;
var f;
f = async function* h({x: [y]}) {
  callCount = callCount + 1;
};
f({
  x: [45]
}).next().then(() => {}).then($DONE, $DONE);