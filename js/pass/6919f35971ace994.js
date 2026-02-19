var counter = 0;
var key1vof = [];
var key2vof = [];
var key1 = {
  valueOf: function () {
    key1vof.push(counter);
    counter += 1;
    return 1;
  },
  toString: null
};
var key2 = {
  valueOf: function () {
    key2vof.push(counter);
    counter += 1;
    return 2;
  },
  toString: null
};
class C {
  a() {
    return 'A';
  }
  [key1]() {
    return 'B';
  }
  c() {
    return 'C';
  }
  [key2]() {
    return 'D';
  }
}