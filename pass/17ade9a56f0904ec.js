function ID(x) {
  return x;
}
var value;
var proto = {
  m(name, v) {
    value = name + ' ' + v;
  }
};
var object = {
  set ['a'](v) {
    super.m('a', v);
  },
  set [ID('b')](v) {
    super.m('b', v);
  },
  set [0](v) {
    super.m('0', v);
  },
  set [ID(1)](v) {
    super.m('1', v);
  }
};
Object.setPrototypeOf(object, proto);
object.a = 2;
object.b = 3;
object[0] = 4;
object[1] = 5;