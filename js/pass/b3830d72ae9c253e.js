var A = {
  get ['a']() {
    return 'A';
  }
};
var B = {
  get b() {},
  get ['b']() {
    return 'B';
  }
};
var C = {
  get c() {},
  get ['c']() {},
  get ['c']() {
    return 'C';
  }
};
var D = {
  get ['d']() {},
  get d() {
    return 'D';
  }
};