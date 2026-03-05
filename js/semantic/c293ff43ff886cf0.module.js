var a = 1;
var o = {
  a: 2
};
try {
  with (o) {
    a = 3;
    throw 1;
    a = 4;
  }
} catch (e) {}