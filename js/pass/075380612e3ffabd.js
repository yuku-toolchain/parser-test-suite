function ID(x) {
  return x;
}
var proto = {
  m() {
    return ' proto m';
  }
};
var object = {
  get ['a']() {
    return 'a' + super.m();
  },
  get [ID('b')]() {
    return 'b' + super.m();
  },
  get [0]() {
    return '0' + super.m();
  },
  get [ID(1)]() {
    return '1' + super.m();
  }
};
Object.setPrototypeOf(object, proto);