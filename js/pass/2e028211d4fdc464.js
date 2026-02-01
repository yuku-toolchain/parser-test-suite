var counter = 0;
var key1ToString = [];
var key2ToString = [];
var key1 = {
  toString: function () {
    key1ToString.push(counter);
    counter += 1;
    return 'b';
  }
};
var key2 = {
  toString: function () {
    key2ToString.push(counter);
    counter += 1;
    return 'd';
  }
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