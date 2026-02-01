var callCount = 0;
var f;
f = async function* h([x = 23]) {
  callCount = callCount + 1;
};
f([undefined]).next().then(() => {}).then($DONE, $DONE);