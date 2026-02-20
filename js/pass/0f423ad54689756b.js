var poisoned = 0;
var poison = {
  toString() {
    poisoned += 1;
    throw 'Should not call toString on this/replaceValue';
  }
};
var searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  get [Symbol.replace]() {}
};
searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: {},
  toString() {
    throw 'Should not call toString on searchValue';
  }
};
searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: '',
  toString() {
    throw 'Should not call toString on searchValue';
  }
};
searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: 42,
  toString() {
    throw 'Should not call toString on searchValue';
  }
};
searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: Symbol(),
  toString() {
    throw 'Should not call toString on searchValue';
  }
};
searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: true,
  toString() {
    throw 'Should not call toString on searchValue';
  }
};
searchValue = {
  [Symbol.match]: false,
  flags: 'g',
  [Symbol.replace]: false,
  toString() {
    throw 'Should not call toString on searchValue';
  }
};