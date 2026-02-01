var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on replaceValue';
  }
};
var thisValueCalled = 0;
var thisValue = {
  toString() {
    thisValueCalled += 1;
    return '';
  }
};
var called = 0;
var searchValue = {
  toString() {
    called += 1;
  }
};
thisValueCalled = 0;
called = 0;
searchValue = {
  toString() {
    called += 1;
    return Symbol();
  }
};