let valueOfCallCount = 0;
let index = {
  valueOf() {
    valueOfCallCount++;
    return 1;
  }
};
let a = [0, 1, 2, 3];