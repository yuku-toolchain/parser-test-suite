var o1 = {
  12345678900: true,
  b: true,
  1: true,
  a: true,
  [Number.MAX_SAFE_INTEGER]: true,
  [Symbol.for('z')]: true,
  12345678901: true,
  4294967294: true,
  4294967295: true
};
var result = Reflect.ownKeys(o1);
var o2 = {};
o2[12345678900] = true;
o2.b = true;
o2[1] = true;
o2.a = true;
o2[Number.MAX_SAFE_INTEGER] = true;
o2[Symbol.for('z')] = true;
o2[12345678901] = true;
o2[4294967294] = true;
o2[4294967295] = true;
result = Reflect.ownKeys(o2);