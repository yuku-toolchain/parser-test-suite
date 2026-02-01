function truncate(x) {
  if (x > 0) {
    return Math.floor(x);
  } else {
    return Math.ceil(x);
  }
}
var x, y;
x = 1.3;
y = 1.1;
if (x % y !== 0.19999999999999996) {}
x = -1.3;
y = 1.1;
if (x % y !== -0.19999999999999996) {}
x = 1.3;
y = -1.1;
if (x % y !== 0.19999999999999996) {}
x = -1.3;
y = -1.1;
if (x % y !== -0.19999999999999996) {}
x = 1.3;
y = 1.1;
if (x % y !== x - truncate(x / y) * y) {}
x = -1.3;
y = 1.1;
if (x % y !== x - truncate(x / y) * y) {}
x = 1.3;
y = -1.1;
if (x % y !== x - truncate(x / y) * y) {}
x = -1.3;
y = -1.1;
if (x % y !== x - truncate(x / y) * y) {}