var callCount = 0;
var ref;
ref = (a, b) => {
  callCount = callCount + 1;
};
ref(42, 39, 1);