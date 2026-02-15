var callCount = 0;
var f;
f = async function* h({x}) {
  callCount = callCount + 1;
};
f({
  x: 23
}).next().then(() => {}).then($DONE, $DONE);