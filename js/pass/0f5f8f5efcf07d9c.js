var result;
var called;
var thisValue;
called = 0;
thisValue = {
  [Symbol.toPrimitive]() {
    called += 1;
    return 'aa';
  },
  toString() {
    throw 'poison';
  },
  valueOf() {
    throw 'poison';
  }
};
result = ('').replaceAll.call(thisValue, 'a', 'z');
called = 0;
thisValue = {
  [Symbol.toPrimitive]: undefined,
  toString() {
    called += 1;
    return 'aa';
  },
  valueOf() {
    throw 'poison';
  }
};
result = ('').replaceAll.call(thisValue, 'a', 'z');
called = 0;
thisValue = {
  [Symbol.toPrimitive]: undefined,
  toString: undefined,
  valueOf() {
    called += 1;
    return 'aa';
  }
};
result = ('').replaceAll.call(thisValue, 'a', 'z');
thisValue = 4244;
result = ('').replaceAll.call(thisValue, '4', 'z');
thisValue = true;
result = ('').replaceAll.call(thisValue, 'ru', 'o m');
thisValue = false;
result = ('').replaceAll.call(thisValue, 'al', 'on');