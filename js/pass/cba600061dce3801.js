var o = {
  x: 42,
  y: 39,
  z: 'cheeseburger'
};
var x, y, z;
var counter = 0;
for ({x, ...z} of [o]) {
  var keys = Object.getOwnPropertyNames(z);
  counter += 1;
}