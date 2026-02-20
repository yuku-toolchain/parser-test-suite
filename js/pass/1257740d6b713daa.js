function ID(x) {
  return x;
}
var proto = {
  m() {
    return ' proto m';
  }
};
var object = {
  ['a']() {
    return 'a' + super.m();
  },
  [ID('b')]() {
    return 'b' + super.m();
  },
  [0]() {
    return '0' + super.m();
  },
  [ID(1)]() {
    return '1' + super.m();
  }
};
Object.setPrototypeOf(object, proto);