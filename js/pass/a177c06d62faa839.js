var f1 = ({
  m(x = 42) {}
}).m;
var f2 = ({
  m(x = 42, y) {}
}).m;
var f3 = ({
  m(x, y = 42) {}
}).m;
var f4 = ({
  m(x, y = 42, z) {}
}).m;