var result;
var called;
var replaceValue;
called = 0;
replaceValue = {
  [Symbol.toPrimitive]() {
    called += 1;
    return 'z';
  },
  toString() {
    throw 'poison';
  },
  valueOf() {
    throw 'poison';
  }
};
result = ('aa').replaceAll('a', replaceValue);
called = 0;
replaceValue = {
  [Symbol.toPrimitive]: undefined,
  toString() {
    called += 1;
    return 'z';
  },
  valueOf() {
    throw 'poison';
  }
};
result = ('aa').replaceAll('a', replaceValue);
called = 0;
replaceValue = {
  [Symbol.toPrimitive]: undefined,
  toString: undefined,
  valueOf() {
    called += 1;
    return 'z';
  }
};
result = ('aa').replaceAll('a', replaceValue);
replaceValue = 42;
result = ('aa').replaceAll('a', replaceValue);
replaceValue = true;
result = ('aa').replaceAll('a', replaceValue);
replaceValue = false;
result = ('aa').replaceAll('a', replaceValue);
replaceValue = undefined;
result = ('aa').replaceAll('a', replaceValue);
replaceValue = null;
result = ('aa').replaceAll('a', replaceValue);