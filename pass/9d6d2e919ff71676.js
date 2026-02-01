var callCount = 0;
var f;
f = async function* ({arrow = () => {}}) {
  callCount = callCount + 1;
};
f({}).next().then(() => {}).then($DONE, $DONE);