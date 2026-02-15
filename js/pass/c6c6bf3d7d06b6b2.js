let length = "outer";
var callCount = 0;
var f;
f = async function* ([...{0: v, 1: w, 2: x, 3: y, length: z}] = [7, 8, 9]) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);