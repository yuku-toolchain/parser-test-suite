var arr = [[42, 1], [42, 2]];
var mapperFn = function (e) {
  return e;
};
arr.constructor = {};
var actual = arr.flatMap(mapperFn);
var called = 0;
arr.constructor = {
  get [Symbol.species]() {
    called++;
    return null;
  }
};
actual = arr.flatMap(mapperFn);
called = 0;
arr.constructor = {
  get [Symbol.species]() {
    called++;
    return undefined;
  }
};
actual = arr.flatMap(mapperFn);
called = 0;
arr.constructor = {
  get [Symbol.species]() {
    called++;
    return 0;
  }
};
called = 0;
arr.constructor = {
  get [Symbol.species]() {
    called++;
    return '';
  }
};
called = 0;
arr.constructor = {
  get [Symbol.species]() {
    called++;
    return false;
  }
};
called = 0;
arr.constructor = {
  get [Symbol.species]() {
    called++;
    return {};
  }
};
called = 0;
arr.constructor = {
  get [Symbol.species]() {
    called++;
    return [];
  }
};
called = 0;
arr.constructor = {
  get [Symbol.species]() {
    called++;
    return Symbol();
  }
};