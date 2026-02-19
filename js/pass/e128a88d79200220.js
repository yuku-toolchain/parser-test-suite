let count = 0;
let obj = {
  [Symbol.toPrimitive](hint) {
    count += 1;
    return 1;
  }
};