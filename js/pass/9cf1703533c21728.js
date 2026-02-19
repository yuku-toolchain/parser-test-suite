var thisValueCalled = 0;
var thisValue = {
  toString() {
    thisValueCalled += 1;
    return '';
  }
};
var searchValueCalled = 0;
var searchValue = {
  toString() {
    searchValueCalled += 1;
    return '';
  }
};
var called = 0;
var replaceValue = {
  toString() {
    called += 1;
  }
};
searchValueCalled = 0;
thisValueCalled = 0;
called = 0;
replaceValue = {
  toString() {
    called += 1;
    return Symbol();
  }
};