var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on replaceValue';
  }
};
var called = 0;
var thisValue = {
  toString() {
    called += 1;
  }
};
var searchValue = {
  toString() {
    throw 'Should not call toString on searchValue';
  }
};
called = 0;
thisValue = {
  toString() {
    called += 1;
    return Symbol();
  }
};