let length = "outer";
var callCount = 0;
var f;
f = async function* ([...{0: v, 1: w, 2: x, 3: y, length: z}]) {
  callCount = callCount + 1;
};
f([7, 8, 9]).next().then(() => {}).then($DONE, $DONE);