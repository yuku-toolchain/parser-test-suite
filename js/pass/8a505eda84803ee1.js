var callCount = 0;
var f;
f = ([gen = function* () {}, xGen = function* x() {}]) => {
  callCount = callCount + 1;
};
f([]);