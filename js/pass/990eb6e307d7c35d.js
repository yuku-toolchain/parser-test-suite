var counter = 0;
var key1 = {
  toString: function () {
    return 'b';
  }
};
var key2 = {
  toString: function () {
    return 'd';
  }
};
var object = {
  a() {
    return 'A';
  },
  [key1]() {
    return 'B';
  },
  c() {
    return 'C';
  },
  [key2]() {
    return 'D';
  }
};