var callCount = 0;
var ref = async a => {
  callCount = callCount + 1;
};
ref(42, 39).then(() => {}).then($DONE, $DONE);