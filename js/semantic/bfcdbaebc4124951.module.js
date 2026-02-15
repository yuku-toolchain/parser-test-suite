var yield = 'y';
var yieldSet;
var obj = {
  get [yield]() {
    return 'get yield';
  },
  set [yield](param) {
    yieldSet = param;
  }
};
obj.y = 'set yield';