var getCalls = [];
var arrayLike = {
  length: 3,
  get 0() {
    getCalls.push(0);
    return 2;
  },
  get 1() {
    getCalls.push(1);
    return 1;
  },
  get 2() {
    getCalls.push(2);
    return 3;
  }
};