let receiver = {};
let typedArray = new Int32Array(10);
let valueOfCalled = 0;
let value = {
  valueOf() {
    valueOfCalled++;
    return 1;
  }
};