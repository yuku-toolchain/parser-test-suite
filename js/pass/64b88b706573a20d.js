var callCount = 0;
var f;
f = async function* h({x: y = 33}) {
  callCount = callCount + 1;
};
f({}).next().then(() => {}).then($DONE, $DONE);