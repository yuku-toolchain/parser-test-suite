let length = "outer";
var callCount = 0;
var obj = {
  method([...{0: v, 1: w, 2: x, 3: y, length: z}]) {
    callCount = callCount + 1;
  }
};
obj.method([7, 8, 9]);