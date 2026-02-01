let receiver = new Int32Array(10);
let obj = Object.create(receiver);
let valueOfCalled = 0;
let value = {
  valueOf() {
    valueOfCalled++;
    return 1;
  }
};