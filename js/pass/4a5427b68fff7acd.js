let length = "outer";
var callCount = 0;
var C = class {
  method([...{0: v, 1: w, 2: x, 3: y, length: z}]) {
    callCount = callCount + 1;
  }
};
new C().method([7, 8, 9]);